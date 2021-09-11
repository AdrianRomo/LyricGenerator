from utils.constants import MODEL_PATH

class GenerateLyric(object):
    """
    TODO:
    - Generate Model and integrate it in this class.
    - Integrate it in React
    """
    def __init__(self, lyric_input, percentage):
        self.inp = lyric_input
        self.perc = percentage

    def setup(self):
        model_path = MODEL_PATH
        return model_path

    def generate_lyric(self):
        return self.inp + " Is in the air"

    def show(self):
        response = "Hola soy una lyric"
        return response