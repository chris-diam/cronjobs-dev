const express = require('express')
const db = require('./src/db/mongoose')
require('dotenv').config()
const http = require('http')
const socketio = require('socket.io')
const jobs = require('./src/routes/cronJobs')
const path = require('path')
const cronJob = require('./src/models/cronJob')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = process.env.PORT 
const publicDirectoryPath = path.join(__dirname, '/public')

app.use(express.static(publicDirectoryPath))

app.use(express.json())

app.use('/api',jobs)



io.on('connection',async (socket) => {
  
    var socketID = 0
    socket.on('getSocketId',(data) => {
    
        socketID = data
        console.log(`Socket ${socketID} connected`)
    })
    
    const dataUpdate = setInterval(async function() {
        
        let events = await cronJob.find({socket_id: socketID})
        
        console.log(`Events fount for ${socketID} are : `, events.length )
        socket.emit('events', events)
        console.log('Events send')
        events = []
    }, 60000);

    socket.on('custom-event', (receivedEvents) => {
        
        receivedEvents.forEach(async (event) => {
            console.log(`${event.event} from socket ${event.socket_id} is deleted`)
            await cronJob.deleteOne({socket_id: event.socket_id})
            
        });
    })
    
    socket.on('disconnect',() => {
        console.log(`socket ${socketID} disconected`)
   })
 })
 
 const start = async () => {
    try{
        server.listen(port, console.log(`Server running on port ${port}`))
    }catch (error){
        console.log(error)
    }
}

start()