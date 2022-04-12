const mongoose = require('mongoose')

const Auth = new mongoose.Schema({

    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('Auth',Auth)