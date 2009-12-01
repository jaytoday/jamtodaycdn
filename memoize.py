#!/usr/bin/python2.5
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import logging
import os 

from google.appengine.ext import db
from google.appengine.api import memcache

ACTIVE_ON_DEV_SERVER = True

def memoize(time=1000000, force_cache=False, cache_ignore=[], 
            cache_accept=[], version=False):
    
    """Decorator to memoize functions using memcache.
    
    Optional Args:
      time - duration before cache is refreshed
      force_cache - forces caching on dev_server (useful for APIs, etc.)
      version - use app version to refresh resources
      cache_ignore (use with redundant key val!) - tells cache to ignore kwarg
      cache_accept - tells cache to accept kwarg (kwarg can/should be used in memcache key)
    
    Optional Method Kwargs:
      force_run - forces fxn to run and cache to refresh
      

    Usage:
      
      @memoize(86400)
      def updateAllEntities(key_name, params, force_run=False):
         entity = Model.get_by_key_name(key_name)
         for param in params.items():
            setattr(entity, param.key(), param.value())
            db.put(entity) 
      
    TODO: Support for Lists and Dicts 
    """
    def decorator(fxn):
        def wrapper(*args, **kwargs):
          # create memcache_key
          approved_classes=(
          db.Link, db.Key, str, unicode, int, float, bool
          )
          arg_string = ""
          for arg in args:
            if isinstance(arg, approved_classes) or arg is None:
              arg_string += "_" +  arg 
            elif issubclass(arg.__class__, CacheSafe):
                logging.debug('using a cachesafe class')
                continue
            else:
              raise UnsupportedArgumentError(arg)
          cache_ignore.append('force_run')
          for kwarg in kwargs.items():
            if kwarg[0] in cache_ignore: 
              continue
            elif isinstance(kwarg[1], approved_classes) or kwarg[1] is None \
            or kwarg[0] in cache_accept: 
              arg_string += "_" + kwarg[0] + "=" + kwarg[1] 
            else:
              raise UnsupportedArgumentError(kwarg[1])             
          key = fxn.__name__ + arg_string
          if version:
            # differentiate key by version of the app 
            key += os.environ['CURRENT_VERSION_ID'].split('.')[0] # only count major releases

          # Decide whether or not to use memcache
          # overrides (force_run and force_cache) get first priority
          if kwargs.get('force_run'):
             logging.info("memoize force_run func %s" % fxn.__name__)
             memcache_on = False
          elif force_cache: # force_run overrides force_cache
            #logging.info("forced cache of %s" % fxn.__name__)
            memcache_on = True
          elif Debug() and not ACTIVE_ON_DEV_SERVER:
            memcache_on = False
          else: # on production, and no overrides
            memcache_on = True
                      
          # get data from memcache
          if memcache_on: 
            try: 
              data = memcache.get(key)
            except TypeError:
              logging.error('unable to get value for key %s from memcache.\
              This is probably because of a prior server error.' %
              key)
              data = None
          else: data = None

          # return data if present
          if data:
              if isinstance(data, NoneVal): data = None
              from model_utils import from_binary
              data = from_binary(data)
              return data
              
          # if data hasn't been returned, call function      
          data = fxn(*args, **kwargs)
          
          # save data to memcache
          if memcache_on or kwargs.get('force_run', None):
             # use cache_data name so transformed data isn't returned
             if data is None:
                cache_data = NoneVal() 
             else:
               from model_utils import to_binary
               cache_data = to_binary(data)
             try: 
               memcache.set(key, cache_data, time)
             except ValueError:
               logging.error('unable to cache data for key %s.\
               This is most likely because the data is > 1MB. ' % key)
             
          # return data   
          return data
          
        return wrapper
    return decorator  




""" Util Methods """

class UnsupportedArgumentError(Exception):
  ''' An unsupported argument has been passed to Memoize fxn '''
  def __init__(self, value):
       self.arg = value
  def __str__(self):
       return repr(type(self.arg).__name__ + " is not a supported arg type")

def Debug():
    '''return True if script is running in the development envionment'''
    return  'Development' in os.environ['SERVER_SOFTWARE']
    
    
""" Singleton Classes """
    
class NoneVal():
  ''' A replacement for None, so a memoized fxn can return a None val
  without making the Memoize fxn assume that the "None" means there
  isn't a cached value '''
  pass



class CacheSafe(object):
  ''' We're all consenting adults here. Attributes are forbidden
  from being saved, since class scope is not maintained when
  cached data is retrieved. 
  
  '''  
  def __setattr__(self, *args, **kwargs):
    raise AttributeError('Never set CacheSafe attributes')
    
