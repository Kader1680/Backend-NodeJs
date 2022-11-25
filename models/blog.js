const mongoose = require('mongoose')

const blogShcema = new mongoose.Schema({

    title : {
        type : String, 
        required: true
    },
    snippet :{
        type : String, 
        required: true
    },
    body :{
        type : String, 
        required: true
    }
})

// create model  ====> name of collection
const Blog = mongoose.model('Blog', blogShcema)

module.exports = Blog