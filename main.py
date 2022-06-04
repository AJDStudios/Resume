from flask import Flask, render_template #redirect, url_for,

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html") 
    #, style.css, app.js") 

#@app.route("/<name>")
#def pagetitle(name):
#    return f"hello {name}!"

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