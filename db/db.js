const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/local'

mongoose.connect(DB_URL)

mongoose.connection.on('connected', function(){
    console.log('mongoose connection open to ' + DB_URL)
})

mongoose.connection.on('error', function(){
    console.log('mongoose connection error to ' + DB_URL)
})

mongoose.connection.on('disconnected', function(){
    console.log('mongoose connection disconnected')
})

module.exports = mongoose
