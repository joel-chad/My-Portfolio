const mongoose = require("mongoose")
const router = require('express').Router();
const Blog = require('../models/Blog')

router.get('/',async (req, res)=>{
    try{
    const blogs = await Blog.find()
    res.json(blogs)
    }catch(err){
        res.json({message: err});
    }
})

router.post('/saveBlog', async (req, res)=>{
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
        image: req.body.image
    })
    try{
        const savedBlog = await blog.save();
        res.json(savedBlog)
    }catch(err){
        res.json({message: err})
    }
})

router.patch('editBlog/:blogId', async (req, res)=>{
    const id =req.params.id;
    let items = {};
    for(const counter of req.body){
        items[counter] = counter.value
    }
    const blog = Blog.update({_id: id}, {$set: items}).exec()
})

module.exports=router