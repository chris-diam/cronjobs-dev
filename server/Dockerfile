FROM node:latest

ADD server.js /server/

COPY package*.json ./

RUN npm install

WORKDIR /server/

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]