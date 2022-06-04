from flask import Flask, render_template #redirect, url_for,
import sys, time, os, csv
from time import sleep


app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html") 

#def about(text):
    #for char in about(text):
    #    sys.stdout.write(char)
    #    sys.stdout.flush()
 #       if char != "\n":
  #          time.sleep(0.1)
   #     else:
    #        time.sleep(1)
                
     #   os.system("clear")
#
 #       about(text)
    
    
#text = """Lorem ipsum dolor sit amet,
#consectetur adipiscing elit,
#sed do eiusmod tempor incididunt
#ut labore et dolore magna aliqua."""


@app.route("/<name>")
def pagetitle(name):
    return f"hello {name}!"

##if you want an easter egg for a recruiter - change this.  
#@app.route("/recruiter")    
#def recruiter ():
#    return redirect(url_for("home"))

#@app.route("/")
#def about():
 #   return "About me"

#@app.route("/")
#def skills():
#    return "skills and software"

#@app.route("/")
#def contact():
#    return "contact me"    

if __name__ == "__main__":
    app.run(debug=True)