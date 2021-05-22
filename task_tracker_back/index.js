const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const Task = require('./models/task');

const dbUrl='mongodb+srv://tester:tester123@ClusterName.m7tde.mongodb.net/testing?retryWrites=true&w=majority';
mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000, () => console.log( 'Mongo Server running on port 3000' ))) 
.catch((err) => console.log(err));

const app = express();
app.use(express.static( path.join( __dirname, 'public')));

const PORT = 5000;
app.listen( PORT, () => console.log( `Server running on port ${PORT}` ));

app.get('/addtask',(req,res)=>{
    const task = new Task({
        text: 'Gynacologist Appoinment',
        time: 'Never',
        reminder: false,
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
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
});