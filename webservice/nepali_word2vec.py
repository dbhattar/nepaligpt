import gensim

class NepaliWord2Vec():
    def __init__(self, path):
        self.model = gensim.models.KeyedVectors.load_word2vec_format(path, binary=False)
    
    def most_similar(self, word):
        return self.model.most_similar(word)

    def similarity(self, word1, word2):
        return self.model.similarity(word1, word2)
    
    def word_algebra(self, word1, word2, word3):
        return self.model.most_similar(positive[word1, word2], negative[word3], topn=1)