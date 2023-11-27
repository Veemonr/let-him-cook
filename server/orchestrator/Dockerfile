FROM node:latest

WORKDIR /orchestrator

ENV PORT=4000

ENV APP_SERVICE_URL=http://app:3002/

ENV USER_SERVICE_URL=http://user:3001/

COPY package*.json /orchestrator

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD nodemon app
