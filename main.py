import os
import sys
from flask import Flask, render_template, request, flash
import mongoengine as db
from functions import parseCodeFile, codesnippets, returnProblemFromIndex, returnProblemsFromLanguage, returnProblemsFromLanguageAndSkill, returnProfile, updateProfile, ensure_pythonhashseed
database_name = "testdb"
app = Flask(__name__, static_folder='./build', static_url_path='/')
DB_URI = 'mongodb+srv://jasonrdunne:wordpass@cluster0.aho0z.mongodb.net/testdb?retryWrites=true&w=majority'
db.connect(host=DB_URI)
#parseCodeFile()
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
@app.route('/')
def index():
    return app.send_static_file('index.html')
@app.route('/codesnippetID/<problemId>', methods=['GET', 'POST'])
def returnID(problemId):
    if request.method == 'GET':
        return returnProblemFromIndex(problemId)
    if request.method == 'POST':
        print('Hello world!', file=sys.stderr)
        updateProfile(problemId, request)
        return "Profile Updated."
    return "ERROR"
# codesnippet?language=Java&skill=2
@app.route('/codesnippet/<language>/<skill>', methods=['GET'])
def returnLanguageAndSkill(language, skill):
    return returnProblemsFromLanguageAndSkill(language, skill)
@app.route('/codesnippet/<language>', methods=['GET'])
def returnLanguage(language):
    return returnProblemsFromLanguage(language)
@app.route('/profile/<id>', methods=['GET'])
def returnUserProfile(id):
    return returnProfile(id)
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')