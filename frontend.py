"""
Frontend for the image host. This does the actual serving of the images
for use on others sites and within the admin
"""

import os
import datetime

from google.appengine.ext import db
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app

from models import Image
from memoize import memoize

class GenericServer(webapp.RequestHandler):
    """
    Image server designed to handle serving png images from
    different object properties
    """
    property = 'image'
    def get(self):
        # key is provided in the query string
        image = get_image(self.request.get("id"), self.property)
        if image:
            # we have an image so prepare the response
            # with the relevant headers
            self.response.headers['Content-Type'] = "image/png"
            # and then write our the image data direct to the response
            self.response.out.write(image)
        else:
            # we should probably return an image with the correct header
            # here instead of the default html 404
            self.error(404)

@memoize()
def get_image(image_id, property):
  image = db.get(image_id)
  return eval("image.%s" % property)
  
class ImageServer(GenericServer):
    "Serve the main image"
    property = 'image'

class ThumbServer(GenericServer):
    "Serve the thumbnail image"
    property = 'thumb'

class OriginalServer(GenericServer):
    "Serve the original uploaded image. Currently unused."
    property = 'original'

application = webapp.WSGIApplication([
    ('/i/img', ImageServer),
    ('/i/thumb', ThumbServer),
], debug=True)

def main():
    "Run the application"
    run_wsgi_app(application)

if __name__ == '__main__':
    main()