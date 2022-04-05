const express = require('express')
const customerController = require('../controllers/customer.controllers')
const customerRouter = express.Router()

//Add Customer
customerRouter.post('/addcustomer' , customerController.addcustomer)

//Get All Customers


//Get Customer By Id
