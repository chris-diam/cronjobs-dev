const CronJob = require('../models/cronJob')
const asyncWrapper = require('../middleware/async')
const cron = require('node-cron')

const ScheduleJob = asyncWrapper(async (req, res) => {

    await cron.schedule(`*/1 * * * *`, () => {
        const job = CronJob.create(req.body)
        console.log('Job scheduled')
    },{
        scheduled: true,
        timezone: 'Europe/Athens'
    })

    res.status(201).json({msg:'Job schedule started'})
})

const addEvent = asyncWrapper(async (req, res) => {
    const event = await CronJob.create(req.body)
    res.status(201).json({event})
})

const getAllEvents = asyncWrapper(async (req, res) => {
    const events = await CronJob.find({})
    res.status(200).json({events, amount: events.length})
})

const getEventById = asyncWrapper(async (req, res) => {
    const { event_id } = req.params
    const event = await CronJob.findOne({_id: event_id})
    if(!event){
        return console.log('Not suck event')
    }
    res.status(200).json({event})
})

module.exports =  ScheduleJob
