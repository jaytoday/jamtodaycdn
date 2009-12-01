"""
This is the App Engine Console auto-executing module.  When you start a console session, it will
execute "from autoexec import *".  So you may place anything in here which you find useful.
"""

# Examples:  Uncomment these if you want them in your console by default.
#
#from google.appengine.ext import db
#from google.appengine.api import users
#import logging

# This allows you to run help(...) just like the standard console has.  For some
# reason, setuptools is breaking this import as of SDK version 1.1.3.
import sys, re
sys.path = [x for x in sys.path if not re.search('setuptools', x)]
import site
help = site._Helper()
del sys, re, site, x

"""
This is the App Engine Console auto-executing module.  When you start a console session, it will
execute "from autoexec import *".  So you may place anything in here which you find useful.
"""



''' Shared Imports '''


import logging

from google.appengine.api import users
from google.appengine.ext import db
from google.appengine.api import memcache
from google.appengine.api import mail
from google.appengine.api import xmpp
from google.appengine.api import urlfetch

import django.utils.simplejson as simplejson


''' App Specific '''


# methods, etc. can be imported, just make sure they work!
