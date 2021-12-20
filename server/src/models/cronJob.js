const mongoose = require('mongoose')


const CronJob = new mongoose.Schema({
    event:{
        type: String,
        required: [true, 'must privide a name'],
        trim: true,
        maxLength: [20, 'name cannot be more than 20 charactes']
    },
    socket_id: {
        type: String,
        required: [true, 'You must provide socket index']
    }
})

module.exports = mongoose.model('CronJob', CronJob)