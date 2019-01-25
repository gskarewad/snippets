# from python official image
FROM python:2.7-slim 

# set working directory
WORKDIR /app

COPY . /app
RUN pip install --trusted-host pypi.python.org -r requirements.txt

Expose 80

ENV NAME World

CMD ["python","app.py"]


