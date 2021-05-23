import pandas as pd
import os

m_columns = ['ALink','SName', 'SLink', 'Lyric', 'Idiom']
m2_columns = ['Artist','Songs','Popularity','ALink','Genre','Genres']
df = pd.read_csv(os.getcwd() + '/Datasets/artists-data.csv', encoding='latin-1', usecols=m2_columns)
df2 = pd.read_csv(os.getcwd() + '/Datasets/output.csv', encoding='latin-1', usecols=m_columns)

#common_columns = list(df.columns & df2.columns)

df3 = pd.merge(df, df2, how="left", on="ALink")
df3.dropna() 
df3.to_csv('merged.csv')
print(df3.head())