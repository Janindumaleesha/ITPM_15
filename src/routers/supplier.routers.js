const express = require('express')
const supplierController = require('../controllers/supplier.controllers')
const supplierRouter = express.Router()

//Add Supplier
supplierRouter.post('/addsupplier' , supplierController.addsupplier)



//Get All Suppliers




//Get Supplier By Id