# -*- coding: utf-8 -*-
from datetime import datetime
from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_apispec import marshal_with, doc, use_kwargs
from flask_apispec.views import MethodResource
from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_cors import CORS
from random import randint
# Own Libraries
from .utils.schemas import HealthSchema, GetLyrics, PostLyrics
from .utils.generate_lyrics import GenerateLyric
from .utils.constants import FLASK_ENV, VERSION, PROJECT

app = Flask(__name__)
api = Api(app)  # Flask restful wraps Flask app around it.
cors = CORS(app)

app.config.update({
    'APISPEC_SPEC': APISpec(
        title='Lyric Generator',
        version='v1',
        plugins=[MarshmallowPlugin()],
        openapi_version='2.0',
    ),
    'APISPEC_SWAGGER_URL': '/swagger/',  # URI to access API Doc JSON 
    'APISPEC_SWAGGER_UI_URL': '/swagger-ui/'  # URI to access UI of API Doc
})
docs = FlaskApiSpec(app)

# Endpoints
class Lyrics(MethodResource, Resource):
    """
    Source endpoint to check health of the API
    """
    @doc(description='Health-check to see the status of the API.', tags=['Lyric Generator Status'])
    @marshal_with(HealthSchema)
    def get(self):
        """
        Get method represents a GET API method
        """
        return {
        'project': PROJECT,
        'version': VERSION,
        'environment': FLASK_ENV,
        'date': datetime.now(),
        }

    """
    Class to generate the lyric of the API
    """
    @doc(description='Send input to generate Lyric', tags=['Generate Lyric'])
    @use_kwargs(GetLyrics, location=('json'))
    @marshal_with(PostLyrics)
    def post(self,**kwargs):
        """
        Post method represents a POST API method
        """
        response = {}
        lyrics = GenerateLyric(kwargs)
        response['chorus'] = lyrics.chorus(randint(10,15))
        response['first_verse'] = lyrics.complete_this_song(randint(10,15))
        response['generated_lyric'], response['percentage'] = lyrics.complete_this_song(randint(10,15))
        response['end_verse'] = lyrics.complete_this_song(randint(10,15))
        
        return jsonify(response)

    @doc(description='Health-check to see the status of the API.', tags=['Lyric Generator Status'])
    @marshal_with(HealthSchema)
    def get(self):
        """
        Get method represents a GET API method
        """
        return {
        'project': PROJECT,
        'version': VERSION,
        'environment': FLASK_ENV,
        'date': datetime.now(),
        }

# Add Endpoints
api.add_resource(Lyrics, '/lyrics')

# Add Swagger Documentation
docs.register(Lyrics)

# Handling of 404 errors.
@app.errorhandler(404)
def page_not_found(e):
    return jsonify({"error": "resource not found", "code": "404"}), 404

# We run the Flask application and, if it is running in a development environment,
# we run the application in debug mode.
# to run only ```FLASK_ENV=test FLASK_APP=src.app python -m flask run --host=0.0.0.0 --port=80```
app.run(debug=FLASK_ENV == 'development', host='0.0.0.0')