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

module.exports = {
    addcustomer
}