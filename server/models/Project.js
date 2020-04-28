const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    link:{
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Project', projectSchema);