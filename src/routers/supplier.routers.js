const express = require('express')
const supplierController = require('../controllers/supplier.controllers')
const supplierRouter = express.Router()

//Add Supplier
supplierRouter.post('/addsupplier' , supplierController.addsupplier)

//Get All Suppliers
supplierRouter.get('/getsupplier' , supplierController.getsuppliers)

//Get Supplier By Id
supplierRouter.get('/getsupplierid/:supplierId' , supplierController.getsupplierId)

//Update Supplier
supplierRouter.put('/updatesupplier/:supplierId' , supplierController.updatesupplier)

//Delete Supplier
supplierRouter.delete('/deletesupplier/:supplierId' , supplierController.deletesupplier)

module.exports = supplierRouter