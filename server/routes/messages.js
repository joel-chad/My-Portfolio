const mongoose = require('mongoose');
const router = require('express').Router();


//Routes
router.get('/', (req, res)=>{
    res.send('Send your message mate')
})




module.exports=router