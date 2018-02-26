from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route("/jobs")
def jobs():
	return redirect("https://waechterw.wixsite.com/fahrerjob", code=301)

@app.route("/")
def index():
   return render_template("index.html")

if __name__ == '__main__':
   app.run(debug=True)