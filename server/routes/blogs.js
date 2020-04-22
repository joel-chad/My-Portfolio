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

router.get('/:id', async (req, res)=>{
    try{
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    }catch(err){
        res.json({message: err})
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

router.patch('/:id',async (req, res)=>{
    try{
        const blog = await Blog.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            body: req.body.body,
            image: req.body.image
        })
        await res.json(blog)
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/:id',async (req, res)=>{
    try{
        const blog = await Blog.findByIdAndDelete(req.params.id)
        res.json(blog)
    }catch(err){
        res.json({message: err})
    }
})

module.exports=router