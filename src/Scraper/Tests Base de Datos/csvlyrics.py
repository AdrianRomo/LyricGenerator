import pandas
csv_lyrics = pandas.read_csv('lyrics.csv', usecols=['seq'])
with open("Lyrics.txt", "w") as text_file:
    text_file.write("%s" % csv_lyrics)