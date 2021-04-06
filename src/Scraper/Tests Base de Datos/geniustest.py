# Se compara la columna artists + name del documento tracks_features.csv para scrappear la lyric y género de cada canción,
# en caso de que no haya lyrics, la canción se va a borrar de la database

#ToDo: Falta limpiar la base de artistas en español, encontrar si hay alguna página que contenga los artistas y géneros o scrappear cada canción por género.

import lyricsgenius
import pandas as pd
import re

def read_csv(filename):
    df = pd.read_csv(filename)
    return df

def validate(value):
    return valuesong

def call_lyrics(df):
    L=[]
    lyric = read_data['lyric']
    total_songs = len(df['name'])
    test = 5
    for i in range(test):
        print(i , "/" , test)
        value = genius.search_song(df.iloc[i][2], df.iloc[i][5])
        if value is None:
            valuesong = "NO_LYRICS"
        if value is not None:
            valuesong = value.lyrics
        L.append(valuesong)
    return L

# API KEY
genius = lyricsgenius.Genius("uEDZqiZQVjEWL305Ti7Jg1m0py91r3cd-f93zuLWxOx8YI0F3ljugbc1iven9ACC")

# Genius Params
genius.remove_section_headers = True

# Open CSV
print("Opening Database")
read_data = read_csv('tracks_features_cleaned.csv')

#Process Data
print("Processing Data")
lyric_list = call_lyrics(read_data)
lyric_dataframe = read_data['lyric']

#Assign Column
print("Assigning value to Lyrics Column")
conv_to_series = pd.Series(lyric_dataframe, lyric_list)
LyricsData = read_data.append(conv_to_series,sort=False)

#Convert processed data to csv
print("Converting to .csv")
LyricsData.to_csv("data_with_lyrics.csv")

OpenLyrics = read_csv('data_with_lyrics.csv')

print(OpenLyrics['lyric'].iloc[0:7])
