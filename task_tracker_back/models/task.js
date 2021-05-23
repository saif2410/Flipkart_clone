const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema=new Schema({
    text : String,
    time : String,
    reminder :Boolean
});
const Task = mongoose.model('task',taskSchema);
module.exports = Task;