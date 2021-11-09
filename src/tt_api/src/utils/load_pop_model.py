from ..utils.constants import MODEL_PATH
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from numpy import array
from pandas import read_csv
from tensorflow.keras.utils import to_categorical

class ModelGeneration:
    def __init__(self):
        self.df = read_csv(MODEL_PATH + '/pop_model.csv')
        self.model = load_model(MODEL_PATH + '/song_lyrics_generator.h5')

    def create_tokenization_from_model(self):
        self.tokenizer = Tokenizer()
        self.tokenizer.fit_on_texts(self.df['Lyric'].astype(str).str.lower())
        self.total_words = len(self.tokenizer.word_index)+1
        self.tokenized_sentences = self.tokenizer.texts_to_sequences(self.df['Lyric'].astype(str))
        self.tokenized_sentences[0]
        self.input_sequences = list()
        for i in self.tokenized_sentences:
            for t in range(1, len(i)):
                self.n_gram_sequence = i[:t+1]
                self.input_sequences.append(self.n_gram_sequence)
        self.max_sequence_len = max([len(x) for x in self.input_sequences])
        self.input_sequences = array(pad_sequences(self.input_sequences, maxlen=self.max_sequence_len, padding='pre'))
        # Create predictors and label
        self.x, self.labels = self.input_sequences[:,:-1],self.input_sequences[:,-1]
        self.y = to_categorical(self.labels, num_classes=self.total_words)
        return self
