# encoding: utf-8
from os import environ

# Execution environment.
FLASK_ENV = 'test'
VERSION = '1.0.0'
PROJECT = 'lyric-generator'
MODEL_PATH = 'un/path/para/el/modelo'

# Variables for Testing
if FLASK_ENV in ['test', 'development']:
    VERSION = '1.0.0'
    PROJECT = 'lyric-generator'
    MODEL_PATH = 'un/path/para/el/modelo'

else:
    # Production environment variables' value.
    VERSION = environ['VERSION']
    PROJECT = environ['PROJECT']
    MODEL_PATH = 'un/path/para/el/modelo'
