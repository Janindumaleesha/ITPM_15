//import item modals

const itemModal = require('../modals/item.modals')

//add item modals

additem = async(req,res) => {
    try{
        const createItem = await itemModal.create(req.body)
        if(createItem){
            res.status(201).send("Item created")
        }
        else{
            res.status(204).send("Invalid Item creation")
        }
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
}

module.exports = {
    additem
}
