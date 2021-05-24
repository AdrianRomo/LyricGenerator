import pandas as pd
import os

m_columns = ['ALink','SName', 'SLink', 'Lyric', 'Idiom']
m2_columns = ['Artist','Songs','Popularity','ALink','Genre','Genres']

df = pd.read_csv(os.getcwd() + '/Datasets/artists-data.csv', encoding='latin-1', usecols=m2_columns)
df2 = pd.read_csv(os.getcwd() + '/Datasets/output.csv', encoding='latin-1', usecols=m_columns)

df3 = pd.merge(df, df2, how="left", on="ALink")

df3 = df3.dropna(subset=['Lyric'])

# value count
print(df3['Genre'].value_counts())

df4 = df3[df3['Genre']=='Rock']
df5 = df3[df3['Genre']=='Pop']
df6 = df3[df3['Genre']=='Hip Hop']
#df7 = df3[df3['Genre']=='Hip Hop' | df3['Genre']=='Pop' | df3['Genre']=='Rock']
df4.reset_index(inplace = True, drop=True)
df5.reset_index(inplace = True, drop=True)
df6.reset_index(inplace = True, drop=True)
#df7.reset_index(drop=True)

df3.to_csv('merged.csv')
df4.to_csv('Rock.csv')
df5.to_csv('Pop.csv')
df6.to_csv('Hip Hop.csv')
#df7.tocsv('all_songs.csv')


print(df3.head())
print(df4.head())
print(df5.head())
print(df6.head())