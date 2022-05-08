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
            res.status(200).send(getItems)
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
            res.status(200).send(getItemId)
        }
        else{
            res.status(404).send("nothing")
        }
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }

}

//Update Item
updateitem = async(req,res) => {
    try{
        const findItemID = await itemModal.findById(req.params.itemId)
        try{
            if(findItemID){
                const updateItem = await itemModal.updateOne({_id:findItemID._id},{$set:req.body})
                if(updateItem){
                    res.status(200).send(true)
                }
                else{
                    res.status(404).send("Not Updated Item")
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

//Delete Item
deleteitem = async(req,res) => {
    try{
        const findItem = await itemModal.deleteOne({itemId:{$_id:'itemId'}})
        if(findItem){
            res.status(200).send("Deleted Item")
        }     
        else{
            res.status(404).send("Not Deleted Item")
        }      
    }
    catch(err){
        res.status(500).send(err)
        console.log(err)
    }
}

module.exports = {
    additem,
    getitems,
    getitemId,
    updateitem,
    deleteitem
}

