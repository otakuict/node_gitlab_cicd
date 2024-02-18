FROM node:16.20.2-alpine

RUN mkdir /app
ENV HOME=/app

WORKDIR $HOME

COPY /src $HOME/src
COPY /package.json $HOME/package.json
COPY /jest.config.js $HOME/jest.config.js


RUN npm install
EXPOSE 4001 
CMD ["node","src/server.js"]