const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema=new Schema({
    text : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
        
    },
    reminder :{
        type : Boolean,
        required : true
    }
});
const Task = mongoose.model('task',taskSchema);
module.exports = Task;