const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
var path = require('path');
const bodyparser = require('body-parser');

const app = express();

dotenv.config()

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json({limit: '30MB'}));
app.use(express.static(path.join(__dirname, '/assets/images')));

const blogRoutes = require('./routes/blogs')
app.use('/blog', blogRoutes)

const messageRoutes = require('./routes/messages')
app.use('/message', messageRoutes)

const userRoutes = require('./routes/user');
app.use('/user', userRoutes)

mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology: true, useNewUrlParser: true}, ()=>{
    console.log("Connected to Database")
})

app.listen(8080, ()=>{
    console.log('Listening on Port 8080');
})