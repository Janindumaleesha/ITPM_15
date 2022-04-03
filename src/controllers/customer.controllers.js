//import customer modal
const customermodal = require('../modals/customer.modals')

//Add customer
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
            res.status(302).send(getCustomers)
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
    addcustomer,
    getcustomers
}