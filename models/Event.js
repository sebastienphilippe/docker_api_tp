const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const EventSchema = new Schema({
    "name": {
        type : String,
        required : true
    },
    "nbr_places": {
        type : Number,
        required : true
    }
})

module.exports = Event = mongoose.model("Event", EventSchema)