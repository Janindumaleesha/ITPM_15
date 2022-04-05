const express = require('express')
const invoiceController = require('../controllers/invoice.controllers')
const invoiceRouter = express.Router()

//Add Invoice
invoiceRouter.post('/addinvoice' , invoiceController.addinvoice)

//Get All Invoices


//Get Invoice By Id