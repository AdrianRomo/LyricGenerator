from datetime import datetime
from numpy import argmax
import requests
import random
from tensorflow.keras.preprocessing.sequence import pad_sequences
from ..utils.load_pop_model import ModelGeneration
class GenerateLyric(ModelGeneration, object):
    def __init__(self, model_loaded, kwargs):
        self.seed_text, self.percentage = kwargs["lyric_input"], kwargs["percentage"]
        self.model_loaded = model_loaded
        print(self.seed_text, self.percentage)

    def complete_this_song(self, next_words):
        try:
            link = f'https://api.datamuse.com/words?rel_rhy={self.seed_text}'
            rhyme = requests.get(link).json()
            if rhyme:
                random.seed(str(datetime.now()))
                rhyme = random.choice(rhyme)
                seed_text = rhyme['word']
        except Exception as e:
            seed_text = self.seed_text
        
        for _ in range(next_words):
            token_list = self.model_loaded.tokenizer.texts_to_sequences([seed_text])[0]
            token_list = pad_sequences([token_list], maxlen=self.model_loaded.max_sequence_len-1, padding='pre')
            predicted = argmax(self.model_loaded.model.predict(token_list, verbose=0), axis=-1)
            output_word = ""
            for word, index in self.model_loaded.tokenizer.word_index.items():
                if index == predicted:
                    output_word = word
                    break
            seed_text += " " + output_word
        return seed_text, self.percentage

    def chorus(self, next_words):
        try:

            link = f'https://api.datamuse.com/words?rel_rhy={self.seed_text}'
            rhyme = requests.get(link).json()
            if rhyme:
                random.seed(str(datetime.now()))
                rhyme = random.choice(rhyme)
                seed_text = rhyme['word']
        except Exception as e:
            seed_text = self.seed_text
        for _ in range(next_words):
            token_list = self.model_loaded.tokenizer.texts_to_sequences([seed_text])[0]
            token_list = pad_sequences([token_list], maxlen=self.model_loaded.max_sequence_len-1, padding='pre')
            predicted = argmax(self.model_loaded.model.predict(token_list, verbose=0), axis=-1)
            output_word = ""
            for word, index in self.model_loaded.tokenizer.word_index.items():
                if index == predicted:
                    output_word = word
                    break
            seed_text += " " + output_word
        return seed_text, self.percentage
