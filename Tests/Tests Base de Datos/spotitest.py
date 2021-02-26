import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id="a1317e121c3145cd999e07a6d15f31de",
                                                           client_secret="e5ec7bffc2264bf49273fe06739a23b1"))

results = sp.search(q='weezer', limit=20)
for idx, track in enumerate(results['tracks']['items']):
    print(idx, track['name'], recommendation_genre_seeds())
