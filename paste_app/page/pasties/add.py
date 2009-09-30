# Copyright 2008 Thomas Quemard
#
# Paste-It is free software; you can redistribute it and/or modify it
# under the terms of the GNU General Public License as published
# by the Free Software Foundation; either version 3.0, or (at your option)
# any later version.
#
# Paste-It is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
# or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
# License for more details.

import cgi
import datetime
import paste_app.paste
import paste_app.paste.form
import paste_app.paste.model
import paste_app.paste.pasty
import paste_app.paste.tag
import paste_app.paste.web

paste_app.paste.form.make_token()

class Add(paste_app.paste.web.RequestHandler):

    def __init__(self):
        paste_app.paste.web.RequestHandler.__init__(self)
        self.set_module("page.pasties.add")
        self.form_code = ""
        self.form_title = ""
        self.form_tags = ""
        self.form_user_name = ""
        self.form_is_private = False
        self.form_parent_slug = ""
        self.form_token = ""
        self.url_parent_slug = ""
        self.parent_paste = None

    def decrement_paste_counter(self, count):
        stats = paste_app.paste.model.PasteStats.all()
        stats.id = 1
        stat = stats.get()
        if stat != None:
            dbnew = paste_app.paste.model.PasteStats(key_name=stat.key().name())
            dbnew.paste_count = stat.paste_count - count
            dbnew.put()

    def delete_empty_tags(self):
        qtags = paste_app.paste.model.Tag.all()
        qtags.filter("pastes <", 1)
        tags = qtags.fetch(5)
        for tag in tags:
            tag.delete()

    def delete_old_forms(self):
        qforms = paste_app.paste.model.Form.all()
        qforms.filter("expired_at <", datetime.datetime.now())
        forms = qforms.fetch(10)
        for form in forms:
            form.delete()

    def delete_old_pastes(self):
        pastes = paste_app.paste.model.Pasty.all()
        pastes.filter("expired_at <", datetime.datetime.now())
        dbpastes = pastes.fetch(5)


        if len(dbpastes) > 0:
            delete_count = 0
            #Deleting each old paste
            for dbpaste in dbpastes:

                # Deleting relations with children
                qreplies = paste_app.paste.model.PasteReply.all()
                qreplies.filter("parent_slug", dbpaste.slug)
                replies = qreplies.fetch(1000)
                for reply in replies:
                    reply.delete()

                # Deleting relation with parent
                # (One delete: only one parent per paste)
                qreplies = paste_app.paste.model.PasteReply.all()
                qreplies.filter("reply_slug", dbpaste.slug)
                reply = qreplies.get()
                if reply != None:
                    reply.delete()

                # Deleting paste <-> tags relations
                tc = paste_app.paste.tag.TagCollection()
                tc.import_string(dbpaste.tags)
                for tagstr in tc.tags:
                    tagrel = paste_app.paste.model.PasteTag()
                    tagrel.paste_slug = dbpaste.slug
                    tagrel.tag_slug = tagstr
                    try:
                        tagrel.delete()
                    except:
                        pass

                    #Decreasing tag paste counter
                    qtag = paste_app.paste.model.Tag.all()
                    qtag.slug = tagstr
                    tag = qtag.get()
                    if tag != None:
                        tag.pastes -= 1
                        tag.put()

                dbpaste.delete()
                delete_count += 1

                # Decreasing reply count for parent paste
                qparent = paste_app.paste.model.PasteReply.all()
                qparent.filter("slug=", dbpaste.parent_paste)
                parent = qparent.get()
                if parent != None:
                    if parent.replies != None:
                        parent.replies -= 1
                    else:
                        parent.replies = 0
                    parent.put()

            # Syncing global paste count
            self.decrement_paste_counter(delete_count)

    def display_form(self):
        self.write_out("page/pasties/add/add.html")

    def get(self):
        self.on_load()

    def get_form_data(self):
        self.form_code = self.request.get("pasty_code")
        self.form_title = self.request.get("pasty_title")
        self.form_tags = self.request.get("pasty_tags")
        self.form_user_name = self.request.get("pasty_user_name")
        if self.request.get("pasty_is_private", None):
          self.form_is_private = True
        else: self.form_is_private = False

        
        self.form_parent_slug = self.request.get("pasty_parent_slug")
        self.form_tags = self.request.get("pasty_tags")
        self.form_token = self.request.get("pasty_token")
        self.url_parent_slug = self.request.get("edit")
        self.parent_slug = ""

    def get_parent_paste(self):
        parent = None
        self.parent_slug = ""
        if self.url_parent_slug != "":
            self.parent_slug = self.url_parent_slug
        elif self.form_parent_slug != "":
            self.parent_slug = self.form_parent_slug

        if self.parent_slug != "":
            pasties = paste_app.paste.model.Pasty.all()
            pasties.filter("slug =", self.parent_slug)
            parent = pasties.get()

        return parent

    def increment_paste_counter(self):
        stats = paste_app.paste.model.PasteStats.all()
        stats.id = 1
        stat = stats.get()
        if stat != None:
            dbnew = paste_app.paste.model.PasteStats(key_name=stat.key().name())
            dbnew.paste_count = stat.paste_count + 1
            dbnew.put()
        else:
            dbnew = paste_app.paste.model.PasteStats(key_name="c1")
            dbnew.paste_count = 1
            dbnew.put()

    def increment_reply_count(self):
        result = False
        if self.parent_paste != None:
            if self.parent_paste.replies != None:
                self.parent_paste.replies += 1
            else:
                self.parent_paste.replies = 1
            result = self.parent_paste.put() != None
        return result

    def insert_paste(self, slug):
        is_reply = self.form_parent_slug != ""
        pasty = paste_app.paste.model.Pasty()
        pasty.slug = slug
        pasty.title = paste_app.paste.pasty.filter_title(self.form_title, slug)
        pasty.posted_by_ip = self.request.remote_addr
        pasty.edited_by_ip = self.request.remote_addr
        pasty.code = self.form_code
        pasty.code_colored = self.prepare_code(self.form_code)
        pasty.tags = self.prepare_tags(self.form_tags)
        if is_reply:
            pasty.parent_paste = self.form_parent_slug
        pasty.replies = 0
        pasty.posted_by_user_name = paste_app.paste.pasty.filter_user_name(self.form_user_name)
        pasty.is_private = self.form_is_private
        pasty.expired_at = datetime.datetime.now() + paste_app.paste.config["pasty_expiration_delta"]
        pasty.language = ""
        pasty_key = pasty.put()

        result = pasty_key != None

        if result == True:
            self.increment_paste_counter()
            if is_reply:
                if self.insert_paste_reply(slug, self.form_parent_slug, pasty.title):
                    self.increment_reply_count()

        return result

    def insert_paste_reply(self, slug, parent_slug, title):
        rep = paste_app.paste.model.PasteReply()
        rep.parent_paste = parent_slug
        rep.reply = slug
        rep.title = title
        return rep.put() != None

    def on_load(self):
        self.get_form_data()
        self.parent_paste = self.get_parent_paste()

        if self.form_token == "":
            self.on_form_not_sent()
        else:
            self.on_form_sent()

    def insert_tags(self, slug):
        tc = paste_app.paste.tag.TagCollection()
        tc.import_string(self.form_tags)

        for tag in tc.tags:
            tagrel = paste_app.paste.model.PasteTag()
            tagrel.pasty_slug = slug
            tagrel.tag_slug = tag
            tagrel.created_at = datetime.datetime.now()
            tagrel.created_by_ip = self.request.remote_addr
            tagrel.edited_at = datetime.datetime.now()
            tagrel.edited_by_ip = self.request.remote_addr
            tagrel.put()

            qtag = paste_app.paste.model.Tag.all()
            qtag.filter("slug =", tag)
            dtag = qtag.get()

            if dtag != None:
                dtag.pastes += 1
                dtag.put()
            else:
                dtag = paste_app.paste.model.Tag()
                dtag.slug = tag
                dtag.created_at = datetime.datetime.now()
                dtag.created_by_ip = self.request.remote_addr
                dtag.edited_at = datetime.datetime.now()
                dtag.edited_by_ip = self.request.remote_addr
                dtag.pastes = 1
                dtag.put()


    def on_form_not_sent(self):
        self.content["pasty_token"] = paste_app.paste.form.put_form_token(self.request.remote_addr)

        if self.request.get("tags") != "":
            self.content["pasty_tags"] = cgi.escape(self.request.get("tags"))

        if self.parent_paste != None:
            self.content["pasty_code"] = cgi.escape(self.parent_paste.code)
            if not self.parent_paste.title.startswith("Edit:"):
                self.content["pasty_title"] = "Edit: " + cgi.escape(self.parent_paste.title)
            self.content["u_parent"] = paste_app.paste.url("%s", self.parent_paste.slug)

        if self.request.get("code") != "":
            self.content["pasty_code"] = cgi.escape(self.request.get("code"))

        if self.request.get("title") != "":
            self.content["pasty_title"] = cgi.escape(self.request.get("title"))

        if self.request.get("username") != "":
            self.content["pasty_user_name"] = cgi.escape(self.request.get("username"));

        if self.parent_paste != None and self.parent_paste.is_private:
          self.content["pasty_is_private"] = True
        else: self.content["pasty_is_private"] = False
        #if self.request.get("is_private") != "":
            #self.content["pasty_is_private"] = self.parent_paste.is_private
            

        if self.parent_paste != None:
            self.content["pasty_parent_slug"] = self.parent_paste.slug

        self.display_form()

        # Some maintenance
        self.delete_old_forms()
        self.delete_old_pastes()
        self.delete_empty_tags()

    def on_form_sent(self):
        prepared_tags = self.prepare_tags(self.request.get("pasty_tags"))
        slug = paste_app.paste.pasty.make_unique_slug(8)

        self.content["pasty_code"] = self.form_code
        self.content["pasty_tags"] = self.form_tags
        self.content["pasty_title"] = self.form_title
        self.content["pasty_token"] = self.form_token
        self.content["pasty_slug"] = cgi.escape(slug)
        self.content["pasty_is_private"] = self.form_is_private
        self.content["pasty_user_name"] = self.form_user_name

        if self.validate_form():
            self.insert_paste(slug)
            self.insert_tags(slug)

            self.content["u_pasty"] = paste_app.paste.url("%s", slug)
            self.content["u_pasty_encoded"] = cgi.escape(self.content["u_pasty"])
            self.content["u_edit_pasty"] = paste_app.paste.url("?edit=%s", slug)
            self.write_out("page/pasties/add/added.html")

            paste_app.paste.form.delete_token(self.form_token, self.request.remote_addr)
        else:
            self.display_form()

    def prepare_code(self, code):
        result = cgi.escape(code)
        return result

    def prepare_tags(self, tags):
        tc = paste_app.paste.tag.TagCollection()
        tc.import_string(tags)
        return tc.export_to_datastore()

    def post(self):
        self.on_load()

    def validate_form(self):
        result = True

        code = self.form_code
        token = self.form_token

        if not paste_app.paste.form.has_valid_token(self.request.remote_addr, token):
            if token != "":
                self.content["pasty_error"] = "<strong>Your form has expired</strong>, you probably took too much time to fill it. <a href=\"" + paste_app.paste.url("") + "\"><strong>Refresh this page</strong></a>."
            result = False

        elif result == True and len(code) == 0:
            self.content["pasty_code_error"] = "You must paste some code."
            result = False

        return result

