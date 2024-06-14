const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const trainSchema = new Schema({
    trainCode: {
        type: String,
        required: true
    },
    trainName: {
        type: String,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    departureLocation: {
        type: String,
        required:false
    },
    destination: {
        type: String,
        required: true
    },
    ticketPrice: {
        type: String,
        required: true
    },
    trainUrl: {
        type: String,
        required: true
    },
})
const Train = mongoose.model(`trainDocument`, trainSchema)
module.exports = Train

