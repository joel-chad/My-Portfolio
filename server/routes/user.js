const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../models/User')

router.get('/',async (req, res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }
    catch(err){
       res.json({message: err});
    }
})

router.post('/saveUser', async (req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try{
        
        const savedUser = await user.save();
        res.json(savedUser)
    }
    catch(err){
        res.json({message: err})
    }
})


module.exports = router
