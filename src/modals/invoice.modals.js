const mongoose = require('mongoose');

const Invoice = new mongoose.Schema({

    cus_name :{
        type : String,
        required: true
    },

    invoice_id :{
        type: String,
        required: true,
        unique: true
    },

    invoice_date :{
        type : Date,
        required: true
    },

    sales_person :{
        type : String,
        required: true
    },

    terms :{
        type : String,
        required: true
    },

    due_date :{
        type : Date,
        required: true
    },

    item_details :{
        type : String,
        required: true
    },

    quantity :{
        type : String,
        required: true
    },

    rate :{
        type : String,
        required: true
    },

    discount :{
        type : String,
        required: true
    },

    amount :{
        type : String,
        required: true
    },

    customer_notes :{
        type : String,
        required: true
    },

    shipping_charges :{
        type : String,
        required: true
    },

    total_amount :{
        type : String,
        required: true
    },

    payment_date :{
        type : String,
        required: true
    },

    payment_mode :{
        type : String,
        required: true
    },

    deposit_to :{
        type : String,
        required: true
    },

    reference :{
        type : String,
        required: true
    },

})

module.exports = mongoose.model('invoice', Invoice)

