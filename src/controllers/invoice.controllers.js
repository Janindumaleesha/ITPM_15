//import invoice modals
const invoicemodal = require('../modals/invoice.modals')

//Add invoices
addinvoice = async(req,res) => {
    try{
        const createInvoice = await invoicemodal.create(req.body)
        if(createInvoice){
            res.status(201).send("Invoice created")
        }
        else{
            res.status(204).send("Invalid Invoice creation")
        }
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
}

//Get all invoice
getinvoices = async(req,res) => {
    try{
        const getInvoices = await invoicemodal.find()
        if(getInvoices){
            res.status(302).send(getInvoices)
        }
        else{
            res.status(404).send("nothing")
        }
        
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
}

module.exports = {
    addinvoice,
    getinvoices
}

