const mongoose = require('mongoose');
const router = require('express').Router();
const Message = require('../models/Message')


//Routes
router.get('/',async (req, res)=>{
    try{
        const message = await Message.find();
        res.json(message)
    } catch(err){
        res.json({message: err})
    }
})

router.get('/:id', async (req, res)=>{
    try{
        const message = await Message.findById(req.params.id)
        res.json(message)
    }catch(err){
        res.json({message: err})
    }
})

router.post('/saveMessage', async (req, res)=>{
    const message = new Message({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        message: req.body.message,
        email: req.body.email
    })
    try{
        const newMessage = await message.save();
        res.json(newMessage)
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/:id',async (req, res)=>{
    try{
        const message = await Message.findByIdAndDelete(req.params.id);
        res.json(message)
    }catch(err){
        res.send({message: err})
    }
})

module.exports=router