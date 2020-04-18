const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
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
    image: {
        type: String
    }
})

module.exports= mongoose.Model('Blogs', blogSchema)