FROM node:latest

WORKDIR /services/app

ENV PORT=3002

COPY package*.json /services/app

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD nodemon app