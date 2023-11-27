FROM node:latest

WORKDIR /services/users

ENV PORT=3001

COPY package*.json /services/users

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD nodemon app
