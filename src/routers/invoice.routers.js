const express = require('express')
const invoiceController = require('../controllers/invoice.controllers')
const invoiceRouter = express.Router()

//Add Invoice
invoiceRouter.post('/addinvoice' , invoiceController.addinvoice)

//Get All Invoices
invoiceRouter.get('/getinvoice' , invoiceController.getinvoices)

//Get Invoice By Id
invoiceRouter.get('/getinvoiceid/:invoiceId' , invoiceController.getinvoiceId)

//Update Invoice
invoiceRouter.put('/updateinvoice/:invoiceId' , invoiceController.updateinvoice)

//Delete Invoice
invoiceRouter.delete('/deleteinvoice/:invoiceId' , invoiceController.deleteinvoice)

module.exports = invoiceRouter