const express = require('express')
const customerController = require('../controllers/customer.controllers')
const customerRouter = express.Router()

//Add Customer
customerRouter.post('/addcustomer' , customerController.addcustomer)

//Get All Customers
customerRouter.get('/getcustomer',customerController.getcustomers)

//Get Customer By Id
customerRouter.get('/getcustomerid/:customerId',customerController.getcustomerId)

//Update Customer
customerRouter.put('/updatecustomer/:customerId',customerController.updatecustomer)

//Delete Customer
customerRouter.delete('/deletecustomer/:customerId',customerController.deletecustomer)

module.exports = customerRouter