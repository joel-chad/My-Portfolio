const mongoose = require("mongoose")
const router = require('express').Router();


router.get('/', (req, res)=>{
    res.send('I got you')
    console.log('I got you')
})

module.exports=router