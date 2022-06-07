from flask import Flask, render_template, redirect, url_for, request
import sys, time, os, csv
from time import sleep

app = Flask(__name__)

def name():
    name = request.args.get("name")

@app.route("/")
@app.route("/home")
@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html") 

@app.route("/")
@app.route("/about")
def about():
    return render_template("about.html") 

@app.route("/")
@app.route("/skills")
def skills():
    return render_template("skills.html") 

@app.route("/")
@app.route("/contact")
def contact():
    return render_template("contact.html") 

# show your appreciateion for the user's curiosity
@app.route("/<name>")
def pagetitle(name):
    return render_template("name.html", name=name) 

#if you want an easter egg for a recruiter - change this.  
@app.route("/")
@app.route("/recruiter")    
def recruiter ():
    return render_template("recruiter.html")

if __name__ == "__main__":
    app.run(debug=True)