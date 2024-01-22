from flask import Flask
from flask import request
from flask_cors import CORS
from nepali_word2vec import NepaliWord2Vec


app = Flask(__name__)
CORS(app)
print("Loading model...")
model = NepaliWord2Vec('../nepali_embeddings_word2vec.txt')
print("Model loaded")
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

@app.route("/findsimilarwords", methods=["POST"])
def find_similarwords():
    content = request.get_json()
    word = content['word']
    print("Word: {}".format(word))
    try:
        similarWords = model.most_similar(word)
    except KeyError:
        return "word not found"
    except:
        return "some error"
    return str(similarWords)

@app.route("/wordalgebra", methods=["POST"])
def word_algebra():
    content = request.get_json()
    firstWord = content['firstWord']
    secondWord = content['secondWord']
    thirdWord = content['thirdWord']
    print("First Word: {}, Second Word: {}, Third Word: {}".format(firstWord, secondWord, thirdWord))
    try:
        resultWords = model.word_algebra(firstWord, secondWord, thirdWord)
    except KeyError:
        return "word not found"
    except:
        return "some error"
    return str(resultWords)

