require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const ejs = require('ejs');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
// const Task = require('./models/task');
const Image = require('./models/image');
const User = require('./models/user');
const jwt = require('jsonwebtoken')

const PORT = 5000;
const dbUrl='mongodb+srv://tester:tester123@ClusterName.m7tde.mongodb.net/Flipkart?retryWrites=true&w=majority';
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
        name: req.body.name,
        price : req.body.price,
        description : req.body.description,
        category: req.body.category,
        subCategory : req.body.subCategory,
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

// app.post('/addtask',(req,res)=>{
//     const task = new Task({
//         text: req.body.text,
//         time: req.body.time,
//         reminder: req.body.reminder,
//     });
//     task.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/alltasks',(req,res)=>{
//     Task.find()
//     .then((result)=>{
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     });
// });

// app.get('/allimages',(req,res)=>{
//     Image.find()
//     .then((result)=>{
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// });

app.post('/search',(req,res)=>{
    // Image.find( { $or : [ { name :  { "$regex": req.body.str , "$options": "i" } },{ category :  { "$regex": req.body.str , "$options": "i" } }] }             )
    // .then((result)=>{
    //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    //     res.send(result);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
    console.log(req.body.categoryClicked)
});

app.post('/category',(req,res)=>{
    Image.find( { $or : [ { subCategory :  { "$regex": req.body.categoryClicked , "$options": "i" } },{ category :  { "$regex": req.body.categoryClicked , "$options": "i" } }] }             )
    .then((result)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.post('/cart',(req,res)=>{
    Image.findById(  req.body.itemId  )
     .then((result)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
});

app.post('/addUser', (req, res) => {
    User.find({email : req.body.Email})
      .then((result)=>{
        if(result.length === 0){
            const user = new User ({
                firstname : req.body.Firstname,
                lastname : req.body.Lastname,
                email : req.body.Email,
                password : req.body.Password,
            });
            user.save()
            .then((result)=>{
                res.send('logged in');
            })
            .catch((err)=>{
                console.log(err);
            });
        }
        else{
          res.send('Email Already in Use');
        }
      })
      .catch((err)=>{
        console.log(err);
      });
  });

  app.post('/checkUser', (req, res) => {
    var Email = req.body.Email;
    var Password = req.body.Password;
  
    User.findOne({email :Email,password: Password})
    .then((result)=>{
      if(!result){
        res.send({ status : false });
      }
      else{
        const user = {_id : result._id}
        const token = jwt.sign(user, 'saif24')
        res.send({ status: true, token });
      }
     })
    .catch((err)=>{
      console.log(err);
    });
  });

  function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null){ return res.send({ status : false }) }

    jwt.verify(token,'saif24',(err,id)=>{
      if(err) return res.send({ status : false });
      req.id = id
      next() // to move on from middleware
    })
  }
  app.post('/profile',authenticateToken, (req, res) => {
    User.findById(req.id)
    .then((result)=>{
      res.send({firstname: result.firstname , lastname: result.lastname, email: result.email})
     })
    .catch((err)=>{
      console.log(err);
    });
  });