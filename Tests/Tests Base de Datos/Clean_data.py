import pandas as pd
import re

def read_csv(filename):
    df = pd.read_csv(filename)
    df = df.replace({'\'': ''}, regex=True)
    df = df.replace({'\[': ''}, regex=True)
    df = df.replace({'\]': ''}, regex=True)
    df['lyric'] = ""
    return df

read_data = read_csv('tracks_features.csv')
read_data.to_csv('tracks_features_cleaned.csv')
