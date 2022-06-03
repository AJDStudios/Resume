# running it from directory didn't work - if something breaks later - check this.
from flask import create_app

app = create_app()

#I believe this is necessary to run the page from the index.html and not from .py directly.
if __name__ == '__main__':
    app.run(debug=True)