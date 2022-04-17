//import supplier modal
const suppliermodal = require('../modals/supplier.modals')

//Add supplier
addsupplier = async(req,res) => {

    try{
        const createSupplier = await suppliermodal.create(req.body)

        if(createSupplier){
            res.status(201).send("Supplier created")
        }
        else{
            res.status(204).send("Invalid Supplier creation")
        }

    }
    catch(err){
        res.status(500).send("Something went wrong")
        console.log(err)
    }
}

//Get All Suppliers

getsuppliers = async(req,res) => {

    try{
        const getSuppliers = await suppliermodal.find()
        if(getSuppliers){
            res.status(200).send(getSuppliers)
        }
        else{
            res.status(404).send("nothing")
        }
    }
    catch(err){
        res.status(500).send("Something went wrong")
        }
}

//Get supplier by ID

getsupplierId = async(req,res) => {
    try{
        const getSupplierId = await suppliermodal.findById(req.params.supplierId)
        if(getSupplierId){
            res.status(302).send(getSupplierId)
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
    addsupplier,
    getsuppliers,
    getsupplierId
}


