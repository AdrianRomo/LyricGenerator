# We use Python 3.9
FROM python:3.9-alpine

# Allow statements and log messages to immediately appear in the logs
ENV PYTHONUNBUFFERED 1

# Install system requirements
RUN apk update \
  # Pythonv3 dev dependencies
  && apk add --virtual build-deps gcc git make linux-headers python3-dev \
  musl-dev libffi-dev openssl-dev g++ \
  # Upgrade pip
  && pip install --upgrade pip

# Set the workdir as /app
WORKDIR /app

# Copy the requirements.txt
COPY ./bots/src/requirements.txt /app/src/requirements.txt

# Install python programmer-defined dependencies
RUN pip install -r src/requirements.txt

# Install gunicorn to run the application in production
RUN pip install gunicorn

# Copy the entire source for the application
COPY ./bots/ /app

# Run the web service on container startup. Here we use the gunicorn
# webserver, with one worker process and 8 threads.
# For environments with multiple CPU cores, increase the number of workers
# to be equal to the cores available.
# Timeout is set to 0 to disable the timeouts of the workers to allow Cloud Run to handle instance scaling.
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 src.main:app