from difflib import SequenceMatcher

txt1 = open('lyric.txt', 'r') 
txt1 = txt1.read()
txt2 = open('maroon5.txt', 'r') 
txt2 = txt2.read()
m = SequenceMatcher(None, txt1, txt2)
print(m.ratio())