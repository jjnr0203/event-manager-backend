FROM node:20.18.0-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i -g @nestjs/cli@10.4.4

CMD [ "npm", "run", "start:dev" ]
