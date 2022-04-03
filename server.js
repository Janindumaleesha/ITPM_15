//import express
const express = require('express')
//import mongoose
const mongoose = require('mongoose')
//import body-parser
const bodyparser = require('body-parser')
//import cors
const cors = require('cors')

//create app
const app = express()

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

//Creat get app

app.get('/get', (req,res)=>{
    res.send("Get method running successfully")
})


/// ================ SERVER ================ ///

app.listen("7050", ()=>{
    console.log("server running on port 7050")
})