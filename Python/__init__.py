from flask import Flask

def create_app():
    app = Flask(__name__) 
#mostly for ensuring this step isn't forgotten, not useful for this web - I believe this is backend work though.    
    app.config['SECRET_KEY'] = '1234'

    return app