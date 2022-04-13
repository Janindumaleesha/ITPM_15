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

//GetAllItems

getitems = async(req,res) => {
    try{
        const getItems = await itemModal.find()
        if(getItems){
            res.status(302).send(getItems)
        }
        else{
            res.status(404).send("nothing")
        }
        
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
}

//Get item by ID

getitemId = async(req,res) => {
    try{
        const getItemId = await itemModal.findById(req.params.itemId)
        if(getItemId){
            res.status(302).send(getItemId)
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
    additem,
    getitems,
    getitemId
    
}

