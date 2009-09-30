#!/usr/bin/env python
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


from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

import paste_app.page.index
import paste_app.page.pasties.add
import paste_app.page.pasties.index
import paste_app.page.pasties.pasty
import paste_app.page.pasties.pasty_txt
import paste_app.page.pasties.sitemap
import paste_app.page.error.error404

pages = [
    ('/paste/?', paste_app.page.pasties.add.Add),
    ('/paste/([a-zA-Z0-9_-]+)?', paste_app.page.pasties.pasty.Pasty),
    ('/paste/([a-zA-Z0-9_-]+).txt', paste_app.page.pasties.pasty_txt.PastyTxt),
    ('/pastes/?', paste_app.page.pasties.index.Index),
    ('/paste/sitemap.xml', paste_app.page.pasties.sitemap.Sitemap),
    ('/paste/.*', paste_app.page.error.error404.Error404)
]
application = webapp.WSGIApplication(pages, debug=True)

def main():

    run_wsgi_app(application)

if __name__ == "__main__":
    main()


