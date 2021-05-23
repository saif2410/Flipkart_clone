const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const Task = require('./models/task');

const PORT = 5000;
const dbUrl='mongodb+srv://tester:tester123@ClusterName.m7tde.mongodb.net/testing?retryWrites=true&w=majority';
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen( PORT, () => console.log( `Server running on port ${PORT}` ))) 
.catch((err) => console.log(err));

const app = express();
app.use(express.static( path.join( __dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post('/addtask',(req,res)=>{
    console.log(req.body);
    // const task = new Task({
    //     text: req.body.text,
    //     time: req.body.time,
    //     reminder: req.body.reminder,
    // });
    // task.save()
    // .then((result)=>{
    //     res.send(result);
    // })
    // .catch((err)=>{
    //     console.log(err);
    // });
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