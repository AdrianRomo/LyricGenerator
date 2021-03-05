import markovify
import random 

def versos(cantidad):
	for sentence in range(cantidad):
	    generatedlyrics = model_combination.make_short_sentence(random.choice(lenghtlyric))
	    print(generatedlyrics)
	else:
		print()

def generarcoros(cantidad):
	for sentence in range(cantidad):
	    generatedlyrics = model_combination.make_short_sentence(random.choice(lenghtcoros))
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
file = open('lyrics150k.txt', 'r') 
text = file.read()
markovifyModel = markovify.Text(text)
file2 = open('maroon5.txt', 'r') 
text2 = file2.read()
markovifyModel2 = markovify.Text(text2)
model_combination = markovify.combine([ markovifyModel, markovifyModel2 ], [ 1, 1.5 ])
model_combination = model_combination.compile()
generarcoros(random.choice(lenghtversos))
for beginning in range(2): 
	versos(random.choice(lenghtversos))
printcoro()
for medium in range(2): 
	versos(random.choice(lenghtversos))
printcoro()
printcoro()