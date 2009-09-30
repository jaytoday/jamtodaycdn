import logging

def redirect_to_login(*args, **kwargs):
    from google.appengine.api import users
    return args[0].redirect(users.create_login_url(args[0].request.uri))

def admin_only(handler):
    def wrapped_handler(*args, **kwargs):    
        # allow cron jobs (TODO: make sure tasks also work!)
        for gae_header in ['X-AppEngine-TaskName', 'X-AppEngine-Cron']:
          if args[0].request.headers.get(gae_header, None):
            logging.info("giving script permission for header %s" % gae_header)
            return handler(args[0])
        from google.appengine.api import users
        user = users.get_current_user()
        if user:
            if users.is_current_user_admin():
                return handler(args[0])
            else:
                logging.warning('An unauthorized user has attempted\
 to use admin_only method %s' % str(args[0]))
                return redirect_to_login(*args, **kwargs)
        else:
            logging.warning('unknown user attempting to access admin only\
 method %s. redirecting to login.' % str(args[0]))
            return redirect_to_login(*args, **kwargs)

    return wrapped_handler
