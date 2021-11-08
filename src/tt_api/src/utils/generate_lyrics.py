from datetime import datetime
from numpy import argmax
import requests
import random
from tensorflow.keras.preprocessing.sequence import pad_sequences
from ..utils.load_pop_model import ModelGeneration
class GenerateLyric(ModelGeneration, object):
    def __init__(self, kwargs):
        self.seed_text, self.percentage = kwargs["lyric_input"], kwargs["percentage"]

    def complete_this_song(self, next_words):
        link = f'https://api.datamuse.com/words?rel_rhy={self.seed_text}'
        rhyme = requests.get(link).json()
        if rhyme:
            random.seed(str(datetime.now()))
            rhyme = random.choice(rhyme)
            seed_text = rhyme['word']
        else:
            seed_text = self.seed_text
        for _ in range(next_words):
            token_list = ModelGeneration.tokenizer.texts_to_sequences([seed_text])[0]
            token_list = pad_sequences([token_list], maxlen=ModelGeneration.max_sequence_len-1, padding='pre')
            predicted = argmax(ModelGeneration.model.predict(token_list, verbose=0), axis=-1)
            output_word = ""
            for word, index in ModelGeneration.tokenizer.word_index.items():
                if index == predicted:
                    output_word = word
                    break
            seed_text += " " + output_word
        return seed_text, self.percentage

    def chorus(self, next_words):
        link = f'https://api.datamuse.com/words?rel_rhy={self.seed_text}'
        rhyme = requests.get(link).json()
        if rhyme:
            random.seed(str(datetime.now()))
            rhyme = random.choice(rhyme)
            seed_text = rhyme['word']
        else:
            seed_text = self.seed_text
        for _ in range(next_words):
            token_list = ModelGeneration.tokenizer.texts_to_sequences([seed_text])[0]
            token_list = pad_sequences([token_list], maxlen=ModelGeneration.max_sequence_len-1, padding='pre')
            predicted = argmax(ModelGeneration.model.predict(token_list, verbose=0), axis=-1)
            output_word = ""
            for word, index in ModelGeneration.tokenizer.word_index.items():
                if index == predicted:
                    output_word = word
                    break
            seed_text += " " + output_word
        return seed_text, self.percentage
