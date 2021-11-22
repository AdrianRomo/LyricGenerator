import requests
import random
import pickle
from datetime import datetime
from numpy import argmax
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
from ..utils.constants import MODEL_PATH


class GenerateLyric(object):
    def __init__(self, kwargs):
        self.seed_text, self.percentage = kwargs["lyric_input"], kwargs["percentage"]
        self.model = load_model(MODEL_PATH + 'song_lyrics_generator.h5')
        with open(MODEL_PATH + 'tokenizer_data.pkl', 'rb') as f:
            data = pickle.load(f)
            self.tokenizer = data['tokenizer']
            self.maxlen = data['max_sequence_len']
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
            token_list = self.tokenizer.texts_to_sequences([seed_text])[0]
            token_list = pad_sequences([token_list], maxlen=self.maxlen-1, padding='pre')
            predicted = argmax(self.model.predict(token_list, verbose=0), axis=-1)
            output_word = ""
            for word, index in self.tokenizer.word_index.items():
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
            token_list = self.tokenizer.texts_to_sequences([seed_text])[0]
            token_list = pad_sequences([token_list], maxlen=self.maxlen-1, padding='pre')
            predicted = argmax(self.model.predict(token_list, verbose=0), axis=-1)
            output_word = ""
            for word, index in self.tokenizer.word_index.items():
                if index == predicted:
                    output_word = word
                    break
            seed_text += " " + output_word
        return seed_text, self.percentage
