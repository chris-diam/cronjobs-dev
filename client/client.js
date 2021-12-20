require('dotenv').config()
const io = require('socket.io-client')
const socket = io.connect(`http://localhost:${process.env.PORT}`)

socket.on('connect', () => {

    socket.id = process.argv[2]
    console.log(`Socket ${socket.id} connected`)
    socket.emit('getSocketId',socket.id)
    
})

socket.on('events', (data) => {

    let receivedEvents = []
    data.forEach(element => {
        receivedEvents.push(element)
    });
    console.log(`${receivedEvents.length} events for Socket ${socket.id}`)
    socket.emit('custom-event',receivedEvents)
    receivedEvents = []   
})




