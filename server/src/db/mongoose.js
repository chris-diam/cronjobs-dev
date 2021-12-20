const mongoose = require('mongoose')
require('dotenv').config()

const db = mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('DB connected'))
.catch(eer => console.log(err))

module.exports = db