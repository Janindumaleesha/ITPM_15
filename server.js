//import express
const express = require('express')
//import mongoose
const mongoose = require('mongoose')
//import body-parser
const bodyparser = require('body-parser')
//import cors
const cors = require('cors')

//import User Router
const UserRouter = require('./src/routers/user.routers')

//import Customer Router


//import Supplier Router


//import Item Router


//import Invoice Router
const InvoiceRouter = require('./src/routers/invoice.routers')

//create app
const app = express()

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

//Use User Router
app.use('/user', UserRouter)

//Use Customer Router


//Use Supplier Router


//Use Item Router


//Use Invoice Router
app.use('/invoice', InvoiceRouter)

//Create get app
app.get('/get', (req,res)=>{
    res.send("Get method running successfully")
})


/// ================ SERVER ================ ///

app.listen("7050", ()=>{
    console.log("server running on port 7050")
})