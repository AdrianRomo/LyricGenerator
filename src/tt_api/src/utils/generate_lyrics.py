from ..utils.constants import MODEL_PATH

class GenerateLyric(object):
    """
    TODO:
    - Generate Model and integrate it in this class.
    - Integrate it in React
    """
    def __init__(self, kwargs):
        self.model_path = MODEL_PATH
        self.lyric_input, self.percentage = kwargs["lyric_input"], kwargs["percentage"]

    def generate_lyric(self):
        print(self.lyric_input + " Is in the air", self.percentage + 10)
        return self.lyric_input + " Is in the air", self.percentage + 10

    def show(self):
        return "Hola soy una lyric", self.model_path
