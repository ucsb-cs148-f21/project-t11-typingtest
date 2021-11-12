import os
from flask import Flask, render_template, request, flash
import mongoengine as db
from functions import parseCodeFile, codesnippets, returnProblemFromIndex, returnProblemsFromLanguage, returnProblemsFromLanguageAndSkill
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


@app.route('/codesnippetID/<id>', methods=['GET'])
def returnID(id):
    return returnProblemFromIndex(id)


# codesnippet?language=Java&skill=2
@app.route('/codesnippet/<language>/<skill>', methods=['GET'])
def returnLanguageAndSkill(language, skill):
    return returnProblemsFromLanguageAndSkill(language, skill)

@app.route('/codesnippet/<language>', methods=['GET'])
def returnLanguage(language):
    return returnProblemsFromLanguage(language)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')