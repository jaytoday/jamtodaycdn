# Copyright 2008 Thomas Quemard
#
# Paste-It is free software; you can redistribute it and/or modify it
# under the terms of the GNU General Public License as published
# by the Free Software Foundation; either version 3.0, or (at your option)
# any later version.
#
# Paste-It  is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
# or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
# License for more details.

import cgi
import paste_app.paste.model
import paste_app.paste.web
from utils.utils import admin_only

class PastyTxt(paste_app.paste.web.RequestHandler):

    def get(self, pasty_slug):
        pasties = paste_app.paste.model.Pasty.all()
        pasties.filter("slug =", pasty_slug)
        self.pasty = pasties.get()
        if self.pasty.is_private:
          self.get_authentication()        
        self.pasty_slug = pasty_slug

        if self.pasty == None:
            self.get_404()
        else:
            self.get_200()

    @admin_only
    def get_authentication(self):
      return
      
    def get_200(self):
        self.content["content"] = self.pasty.code
        self.set_header("Content-Type", "text/plain")
        self.write_out("page/pasties/pasty_txt/200.tpl")

    def get_404(self):
        self.write_out("page/txt.tpl")
        self.error(404)
