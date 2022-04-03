const mongoose = require('mongoose');

const Item = new mongoose.Schema({

    item_code :{
        type: String,
        required: true,
        unique: true
    },

    item_name :{
        type : String,
        required: true
    },

    category :{
        type : String,
        required:true
    },

    qty :{
        type :Number,
        required:true
    },

    unit_price:{
        type: Number,
        required:true
    },
    
    collected_date:{
        type: String,
        required:true
    }

})

//all the data assign to mongo db ("supplier") database collection name, it may be simple or capital but this name save in mongodb in simple letter only and plural suppliers

module.exports = mongoose.model('item',Item)
