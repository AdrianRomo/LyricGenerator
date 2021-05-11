import pandas
df = pandas.read_csv('lyrics.csv', usecols=['seq'])
df.to_csv(r'c:\data\pandas.txt', header=None, index=None, sep=' ', mode='a')
