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
        console.log(err)
    }
}

//Get all invoice
getinvoices = async(req,res) => {
    try{
        const getInvoices = await invoicemodal.find()
        if(getInvoices){
            res.status(200).send(getInvoices)
        }
        else{
            res.status(404).send("nothing")
        }
        
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
}

//Get Invoice by ID
getinvoiceId = async(req,res) => {
    try{
        console.log(req.params.invoiceId)
        const getInvoiceId = await invoicemodal.findById(req.params.invoiceId)
        if(getInvoiceId){
            res.status(200).send(getInvoiceId)
        }
        else{
            res.status(404).send("nothing")
        }
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }

}

//Update Invoice
updateinvoice = async(req,res) => {
    try{
        const findInvoiceID = await invoicemodal.findById(req.params.invoiceId)
        try{
            if(findInvoiceID){
                const updateInvoice = await invoicemodal.updateOne({_id:findInvoiceID._id},{$set:req.body})
                if(updateInvoice){
                    res.status(200).send(true)
                }
                else{
                    res.status(404).send("Not Updated Invoice")
                }
            }
            else{
                res.status(404).send("nothing")
                console.log(err)
            }
        }
        catch(err){
            res.status(500).send(err)
            console.log(err)
        } 

    }
    catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}

//Delete Invoice
deleteinvoice = async(req,res) => {
    try{
        const findInvoice = await invoicemodal.deleteOne({invoiceId:{$_id:'invoiceId'}})
        if(findInvoice){
            res.status(200).send("Deleted Invoice")
        }     
        else{
            res.status(404).send("Not Deleted Invoice")
        }      
    }
    catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}

module.exports = {
    addinvoice,
    getinvoices,
    getinvoiceId,
    updateinvoice,
    deleteinvoice
}

