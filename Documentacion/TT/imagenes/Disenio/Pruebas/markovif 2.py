import markovify
import random 
import pandas as pd
import os

def versos(cantidad):
    for sentence in range(cantidad):
        generatedlyrics = markovifyModel.make_short_sentence(random.choice(lenghtlyric))
        print(generatedlyrics)

def generarcoros(cantidad):
    for sentence in range(cantidad):
        generatedlyrics = markovifyModel.make_short_sentence(random.choice(lenghtcoros))
        coro.append(generatedlyrics)

def printcoro():
    for sentence in coro:
        print(sentence)

lenghtversos = [4, 5, 6]
lenghtlyric = [80, 100, 120]
lenghtcoros = [60, 80, 100]
coro = []
m_columns = ['Lyric']
for _ in range(4): os.chdir('..')
path = os.path.abspath(os.getcwd()+"/Datasets" + "/Pop.csv")
df = pd.read_csv(path, encoding='latin-1', usecols=m_columns)
markovifyModel = markovify.Text(df['Lyric'])

markovifyModel = markovifyModel.compile()
generarcoros(random.choice(lenghtversos))
for beginning in range(1,2):
    print("\nVerse " + str(beginning))
    versos(random.choice(lenghtversos))
print("\nChorus")
printcoro()
for medium in range(3,4): 
    print("\nVerse " + str(medium))
    versos(random.choice(lenghtversos))

print("\nChorus")
printcoro()

print("\nChorus")
printcoro()