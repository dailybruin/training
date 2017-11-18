FROM python:2.7-slim

RUN apt-get update && \
    apt-get -y install gcc
RUN mkdir /notebooks && pip install scipy matplotlib numpy pandas scikit-learn pandoc jupyter

WORKDIR /notebooks

ADD requirements.txt .
RUN pip install -r requirements.txt

COPY ./notebooks /notebooks

EXPOSE 8888