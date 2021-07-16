const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: String,
    price : Number,
    description : String,
    category: String,
    subCategory: String,
    img:{
        contentType : String,
        data : String
    }
});

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;