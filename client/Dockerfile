FROM node:latest

ADD client.js /client/

COPY package*.json ./

RUN npm install

WORKDIR /client/

COPY . .

EXPOSE 3000

ENV id 0

ENTRYPOINT ["node", "client.js"]

CMD ["0"]
