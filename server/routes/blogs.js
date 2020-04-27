const mongoose = require("mongoose")
const router = require('express').Router();
const Blog = require('../models/Blog')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/images')
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split('/')[1];
      cb(null, `${file.fieldname}-${Date.now()}.${ext}`)
    }
  })

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({storage: storage, limits: { fileSize: '4MB' }, fileFilter: fileFilter})

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

router.post('/saveBlog',upload.single("BlogImage"), async (req, res)=>{
    // upload(req, res, (err)=>{
    //     console.log(req.file)
    //     if(err){
    //         return res.end('Error uploading files')
    //     }
    //     res.end('File Uploaded')
    // })
    console.log(req.file)
    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
        image: req.file.path
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
        const blog = await Blog.updateOne({_id: req.params.id},{
            $set:{
                title: req.body.title,
                description: req.body.description
            }
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