const mongoose = require('mongoose');

const Customer = new mongoose.Schema({

    cus_id :{
        type: String,
        required: true,
        unique: true   //Add validation
    },

    customer_type :{
        type : String,
        required: true
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

    customer_Email:{
        type:String,
        required:true
    },

    customer_Work_Phone:{
        type:String,
        required:true
    },

    customer_Mobile_Phone:{
        type:String,
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

//all the data assign to mongo db ("customer") database collection name, it may be simple or capitala but this name save in mongodb in simple letter only and plural suppliers
module.exports = mongoose.model('customer', Customer)