import pickle
import random
with open("../input/music/music.pk", "rb") as f:
    music = pickle.load(f)
music = random.sample(music, 200)
