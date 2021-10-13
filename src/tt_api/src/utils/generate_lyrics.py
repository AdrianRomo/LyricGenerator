from ..utils.constants import MODEL_PATH
# Keras
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pandas as pd
import numpy as np
import tensorflow as tf

df = pd.read_csv(MODEL_PATH + '/pop_model.csv')
model = load_model(MODEL_PATH + '/song_lyrics_generator.h5')

tokenizer = Tokenizer()
tokenizer.fit_on_texts(df['Lyric'].astype(str).str.lower())
total_words = len(tokenizer.word_index)+1
tokenized_sentences = tokenizer.texts_to_sequences(df['Lyric'].astype(str))
tokenized_sentences[0]
input_sequences = list()
for i in tokenized_sentences:
    for t in range(1, len(i)):
        n_gram_sequence = i[:t+1]
        input_sequences.append(n_gram_sequence)
max_sequence_len = max([len(x) for x in input_sequences])
input_sequences = np.array(pad_sequences(input_sequences, maxlen=max_sequence_len, padding='pre'))
# create predictors and label
X, labels = input_sequences[:,:-1],input_sequences[:,-1]
y = tf.keras.utils.to_categorical(labels, num_classes=total_words)
class GenerateLyric(object):
    """
    TODO:
    - Generate Model and integrate it in this class.
    - Integrate it in React
    """
    def __init__(self, kwargs):
        self.seed_text, self.percentage = kwargs["lyric_input"], kwargs["percentage"]

    def complete_this_song(self, next_words):
        for _ in range(next_words):
            token_list = tokenizer.texts_to_sequences([self.seed_text])[0]
            token_list = pad_sequences([token_list], maxlen=max_sequence_len-1, padding='pre')
            predicted = model.predict_classes(token_list, verbose=1)        
            output_word = ""
            for word, index in tokenizer.word_index.items():
                if index == predicted:
                    output_word = word
                    break
            self.seed_text += " " + output_word
        return self.seed_text, self.percentage

    def chorus(self, next_words):
            for _ in range(next_words):
                token_list = tokenizer.texts_to_sequences([self.seed_text])[0]
                token_list = pad_sequences([token_list], maxlen=max_sequence_len-1, padding='pre')
                predicted = model.predict_classes(token_list, verbose=1)        
                output_word = ""
                for word, index in tokenizer.word_index.items():
                    if index == predicted:
                        output_word = word
                        break
                self.seed_text += " " + output_word
            return self.seed_text, self.percentage
