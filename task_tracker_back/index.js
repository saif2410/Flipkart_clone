const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const ejs = require('ejs');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const Task = require('./models/task');
const Image = require('./models/image');

const PORT = 5000;
const dbUrl='mongodb+srv://tester:tester123@ClusterName.m7tde.mongodb.net/testing?retryWrites=true&w=majority';
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen( PORT, () => console.log( `Server running on port ${PORT}` ))) 
.catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.static( path.join( __dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// Set storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req,file,cb){
        cb( null, file.fieldname+ '-' + Date.now() + path.extname(file.originalname));
    }
});

// initialize upload 
const upload = multer({
    storage: storage
}).single('myImage');

// EJS
app.set('view engine','ejs');

app.get('/', (req,res) => res.render('index'));
app.post('/upload',upload, (req,res,next)=>{
    var imd = new Image({
        name: req.file.originalname,
        category: req.body.category,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/public/uploads/' + req.file.filename), { encoding: 'base64' }),
            contentType: req.file.mimetype
        }
    });
    imd.save()
     .then((result)=>{
        res.redirect('/');
     })
     .catch((err)=>{
        console.log(err);
     });
});

app.post('/addtask',(req,res)=>{
    const task = new Task({
        text: req.body.text,
        time: req.body.time,
        reminder: req.body.reminder,
    });
    task.save()
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.get('/alltasks',(req,res)=>{
    Task.find()
    .then((result)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.get('/allimages',(req,res)=>{
    Image.find()
    .then((result)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.post('/search',(req,res)=>{
    Image.find( { $or : [ { name :  { "$regex": req.body.str , "$options": "i" } },{ category :  { "$regex": req.body.str , "$options": "i" } }] }             )
    .then((result)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
});