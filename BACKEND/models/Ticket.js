const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ticketSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    trainClass: {
        type: String,
        required: true
    },
    qty: {
        type:Number,
        required: true
    }
    //addd from , to where the loastion is
})

const Ticket = mongoose.model(`ticketdoc`, ticketSchema)
module.exports = Ticket