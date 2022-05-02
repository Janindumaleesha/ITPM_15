//import customer modal
const customermodal = require('../modals/customer.modals')

//Add new customer
addcustomer = async(req,res) => {

    try{
        const createCustomer = await customermodal.create(req.body)

        if(createCustomer){
            res.status(201).send("Customer created")
        }
        else{
            res.status(204).send("Invalid Customer creation")
        }

    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
}

//Get All Customers
getcustomers = async(req,res) => {

    try{
        const getCustomers = await customermodal.find()
        if(getCustomers){
            res.status(200).send(getCustomers)
        }
        else{
            res.status(404).send("nothing")
        }
    }
    catch(err){
        res.status(500).send("Something went wrong")
        }
}


//Get customer by ID

getcustomerId = async(req,res) => {
    try{
        const getCustomerId = await customermodal.findById(req.params.customerId)
        if(getCustomerId){
            res.status(200).send(getCustomerId)
        }
        else{
            res.status(404).send("nothing")
        }
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }

}

//Update Customer
updatecustomer = async(req,res) => {
    try{
        const findCustomerID = await customermodal.findById(req.params.customerId)
        try{
            if(findCustomerID){
                const updateCustomer = await customermodal.updateOne({_id:findCustomerID._id},{$set:req.body})
                if(updateCustomer){
                    res.status(200).send("Updated Customer")
                }
                else{
                    res.status(404).send("Not Updated Customer")
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

//Delete Customer
deletecustomer = async(req,res) => {
    try{
        const findCustomer = await customermodal.deleteOne({customerId:{$_id:'customerId'}})
        if(findCustomer){
            res.status(200).send("Deleted Customer")
        }     
        else{
            res.status(404).send("Not Deleted Customer")
        }      
    }
    catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}

module.exports = {
    addcustomer,
    getcustomers,
    getcustomerId,
    updatecustomer,
    deletecustomer
}