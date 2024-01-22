from flask import Flask
from flask import request
from flask_cors import CORS
from nepali_word2vec import NepaliWord2Vec


app = Flask(__name__)
CORS(app)
model = NepaliWord2Vec('../nepali_embeddings_word2vec.txt')
@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/findsimilarity", methods=["POST"])
def find_similarity():
    content = request.get_json()
    firstWord = content['firstWord']
    secondWord = content['secondWord']
    print("First Word: {}, Second Word: {}".format(firstWord, secondWord))
    try:
        similarity = model.similarity(firstWord, secondWord)
    except KeyError:
        return "word not found"
    except:
        return "some error"
    return str(similarity)