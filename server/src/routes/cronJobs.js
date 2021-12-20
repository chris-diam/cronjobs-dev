const express = require('express')
const router = express.Router()

const  ScheduleJob = require('../controllers/jobs')

router.route('/cron').post(ScheduleJob)

module.exports = router