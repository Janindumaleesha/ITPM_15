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

module.exports = {
    addinvoice
}

