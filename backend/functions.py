import mongoengine as db
import json
import re

class codesnippets(db.Document):
    index = db.IntField(unique=True)
    language = db.StringField()
    skillcategory = db.StringField()
    difficulty = db.IntField()
    code = db.StringField()

    def to_json(self):
        return {
            "index": self.index,
            "languange": self.language,
            "skillcategory": self.skillcategory,
            "difficulty": self.difficulty,
            "code": self.code
        }


def parseCodeFile():
    codesnippets.drop_collection()
    codeFile = open("code.txt", "r")
    parsingCode = False
    pNumber = -1
    pDifficulty = -1
    codeString = ""
    pLanguage = "Default"
    pSkill = "Default"
    for x in codeFile:
        if "LANGUAGE:" in x: #sets language
            pLanguage = x.split("LANGUAGE:",1)[1].strip()
        if "DIFFICULTY:" in x: #sets difficulty
            pDifficulty = int(re.search(r'\d+', x).group()) #gets integer from line
        if "SKILL:" in x:
            pSkill = x.split("SKILL:",1)[1].strip()
        if "PROBLEMEND:" in x: #detects end of problem, saves json file to server
            problem = codesnippets(index=pNumber, language=pLanguage, skillcategory = pSkill, difficulty = pDifficulty, code = codeString)
            problem.save()
            parsingCode = False
            pNumber = -1
            pDifficulty = -1
            codeString = ""
        if parsingCode: #adds current line of code to codeString
            codeString = codeString + x
        if "PROBLEMSTART:" in x: #detects start of problem, begins parsing code into codeString
            parsingCode = True
            pNumber = int(re.search(r'\d+', x).group()) #gets integer from line

    codeFile.close()

def returnProblemFromIndex(problemIndex):
    jsonfile = json.loads(codesnippets.objects(index=str(problemIndex)).to_json()) #returns a list containing a dictionary
    first_elem = jsonfile[0] #access the dictionary
    return first_elem

#print("\nFetch a book")
#problem = codesnippets.objects(language="Java").first()