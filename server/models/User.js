const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    name: {
        type: String
    },
    password:{
        type: String
    },
    email:{
        type: String
    }
})

module.exports = mongoose.Model('Admin', userSchema);