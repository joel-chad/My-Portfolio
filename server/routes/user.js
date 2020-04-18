const mongoose = require('mongoose');
const router = require('express').Router();

router.get('/', (req, res)=>{
    res.json('This is the user');
})






module.exports = router
