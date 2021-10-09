from utils.constants import MODEL_PATH

class GenerateLyric(object):
    """
    TODO:
    - Generate Model and integrate it in this class.
    - Integrate it in React
    """
    def setup(self):
        return MODEL_PATH

    def generate_lyric(self, lyric_input, percentage):
        return lyric_input + " Is in the air", percentage

    def show(self):
        response = "Hola soy una lyric"
        return response
