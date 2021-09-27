# encoding: utf-8
from os import environ
from dotenv import load_dotenv

# Execution environment.
FLASK_ENV = 'test'
VERSION = '1.0.0'
PROJECT = 'lyric-generator'
MODEL_PATH = 'un/path/para/el/modelo'
# Load environment variables from file only if development mode is active.
if FLASK_ENV == 'development':
    load_dotenv()

# Variables for Testing
if FLASK_ENV == 'test':
    VAR1='Hola'
    FLASK_ENV = 'development'
    VERSION = '1.0.0'
    PROJECT = 'lyric-generator'
    MODEL_PATH = 'un/path/para/el/modelo'

else:
    # Production environment variables' value.
    VAR1 = environ['VAR1']
    FLASK_ENV = environ['FLASK_ENV']
    VERSION = environ['VERSION']
    PROJECT = environ['PROJECT']