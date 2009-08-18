import logging
import os 

from google.appengine.api import memcache
  

ACTIVE_ON_DEV_SERVER = False
      
def memoize(time=1000000):
    
    """Decorator to memoize functions using memcache.
    
    Optional Args:
      time - duration before cache is refreshed

      @memoize(86400)
      def updateAllEntities(key_name, params):
         entity = Model.get_by_key_name(key_name)
         for param in params.items():
            setattr(entity, param.key(), param.value())
            db.put(entity) 
      
    TODO: Support for Lists and Dicts 
    """
    def decorator(fxn):
        def wrapper(*args, **kwargs):
            approved_args=[
            'Link', 'Key', 'str', 'unicode', 
            'int', 'NoneType', 'float', 'bool'
            ] 
            arg_string = ""
            for arg in args:
              if type(arg).__name__ in approved_args: 
                arg_string += str( arg )
              else: raise UnsupportedArgumentError(arg)
            for kwarg in kwargs.items():
              if type(kwarg[1]).__name__ in approved_args: 
                arg_string += str( kwarg[1] )
              else: 
                raise UnsupportedArgumentError(kwarg[1])             
            key = fxn.__name__ + arg_string
            logging.debug('caching key: %s' % key)
            data = memcache.get(key)
            if Debug() and not ACTIVE_ON_DEV_SERVER: 
              return fxn(*args, **kwargs) 
            elif data:
                if data.__class__ == NoneVal: 
                   data = None
                return data
            data = fxn(*args, **kwargs)
            if data is None: data = NoneVal() 
            memcache.set(key, data, time)
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
