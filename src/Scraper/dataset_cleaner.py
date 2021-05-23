# -*- coding: utf8 -*-

import pandas as pd
import re

m_columns = ['ALink','SName', 'SLink', 'Lyric', 'Idiom']

df = pd.read_csv('lyrics-data.csv', encoding='latin-1', usecols=m_columns)
df = df[df['Idiom'] == 'ENGLISH']
df = df.replace({'\[(.*?)\]': ''}, regex=True)
df = df.replace({'Chorus': ''}, regex=True)
df = df.replace({'Ûª': 'i'}, regex=True)
df = df.replace('-',' ')
df = df.replace('  ',' ')
df = df.replace('. .',' ')
df = df.replace('(',' ')
df = df.replace(')',' ')
df = df.replace('\n',' ')

df = df.drop_duplicates()
df = df.reset_index(drop=True)
print(df['Idiom'].value_counts())
df.to_csv('output.csv')
