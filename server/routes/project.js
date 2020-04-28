const router = require('express').Router()
const multer = require('multer')
const Project = require('../models/Project')

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
    const projects = await Project.find()
    res.json(projects)
    }catch(err){
        res.json({message: err});
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const project = await Project.findById(req.params.id)
        res.json(project)
    }catch(err){
        res.json({message: err})
    }
})

router.post('/saveProject',upload.single("ProjectImage"), async (req, res)=>{
    // upload(req, res, (err)=>{
    //     console.log(req.file)
    //     if(err){
    //         return res.end('Error uploading files')
    //     }
    //     res.end('File Uploaded')
    // })
    console.log(req.file)
    const project = new Project({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
        image: req.file.path,
        link: req.body.link
    })
    try{
        const savedProject = await project.save();
        res.json(savedProject)
    }catch(err){
        res.json({message: err})
    }
})

router.patch('/:id',async (req, res)=>{
    try{
        const project = await Project.updateOne({_id: req.params.id},{
            $set:{
                title: req.body.title,
                description: req.body.description
            }
        })
        await res.json(project)
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/:id',async (req, res)=>{
    try{
        const project = await Project.findByIdAndDelete(req.params.id)
        res.json(project)
    }catch(err){
        res.json({message: err})
    }
})


module.exports = router