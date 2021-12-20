# CronedJobs API

A simple job scheduler REST API that receives POST http requests and sends the events to correspondig sockets.

# Installation

In server and client individuals direcories open a terminal window session and enter the following command to install all the Node modules needed to run the app:

```sh
npm install
```
## Run the app in development mode

After doing an `npm install` both in server and client directory enter the following `npm run` commands:

-To run the server:
```sh
node server.js
```
-To connect new client:
```sh
node client.js <socket_id> where socket_id is the socket we want to connect.
```
## Customizing the database and listening port

To configure the mongo database and the port that the app listens on at startup,navigate at the root of the server and client folders, to `.env` and set an appropriate value for the `MONGO_URI` and `PORT` environment variable listed in the file. This must be done before the app is started.
