const mongoose = require('mongoose');

const Supplier = new mongoose.Schema({

    sup_id :{
        type: String,
        required: true,
        unique: true    //validation
    },

    //primary_contact 
    
    salutation :{
        type : String,
        required:true
    },

    first_Name :{
        type :String,
        required:true
    },

    last_Name:{
        type: String,
        required:true
    },
    

    company_Name:{
        type: String,
        required:true
    },


    supplier_Email:{
        type:String,
        required:true
    },

    supplier_Work_Phone:{
        type:Number,
        required:true
    },

    supplier_Mobile_Phone:{
        type:Number,
        required:true
    },

    //Other Details

    facebook:{
        type:String,
    },

    twitter:{
        type:String,
    },

    //Address:

    //Country, address, city for BILLING ADDRESS
    billing_address_country:{
        type:String,
        required:true
    },

    billing_address_address:{
        type:String,
        required:true
    },
    billing_address_city:{
        type:String,
        required:true
    },

     //Country, address, city for SHIPPING ADDRESS
     shipping_address_country:{
        type:String,
        required:true
    },

    shipping_address_address:{
        type:String,
        required:true
    },
    shipping_address_city:{
        type:String,
        required:true
    }
})

//all the data assign to mongo db ("supplier") database collection name, it may be simple or capitala but this name save in mongodb in simple letter only and plural suppliers
module.exports = mongoose.model('supplier', Supplier)
