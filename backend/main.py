from flask import Flask, render_template, request, flash
import mongoengine as db
from functions import parseCodeFile, codesnippets, returnProblemFromIndex
database_name = "testdb"

app = Flask(__name__, static_folder='../build', static_url_path='/')
DB_URI = 'mongodb+srv://jasonrdunne:wordpass@cluster0.aho0z.mongodb.net/testdb?retryWrites=true&w=majority'
db.connect(host=DB_URI)
parseCodeFile()

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/codesnippet/<id>', methods=['GET'])
def returnData(id):
    return returnProblemFromIndex(id)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')