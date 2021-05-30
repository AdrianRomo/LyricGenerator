import markovify
import random 
import pandas as pd
import os

def versos(cantidad):
	for sentence in range(cantidad):
	    generatedlyrics = markovifyModel.make_short_sentence(random.choice(lenghtlyric))
	    print(generatedlyrics)
	else:
		print()

def generarcoros(cantidad):
	for sentence in range(cantidad):
	    generatedlyrics = markovifyModel.make_short_sentence(random.choice(lenghtcoros))
	    coro.append(generatedlyrics)

def printcoro():
	for sentence in coro:
		print(sentence)
	else:
		print()

generatedlyrics = ()
lenghtversos = [4, 5, 6]
lenghtlyric = [80, 100, 120]
lenghtcoros = [60, 80, 100]
coro = []
m_columns = ['Lyric']
path = os.chdir('..')
path = os.path(os.getcwd())
print(path)
df = pd.read_csv('lyrics-data.csv', encoding='latin-1', usecols=m_columns)
markovifyModel = markovify.Text(df)
markovifyModel = markovifyModel.compile()
generarcoros(random.choice(lenghtversos))
for beginning in range(2): 
	versos(random.choice(lenghtversos))
printcoro()
for medium in range(2): 
	versos(random.choice(lenghtversos))
printcoro()
printcoro()