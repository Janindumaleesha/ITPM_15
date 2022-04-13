const express = require('express')
const itemController = require('../controllers/item.controllers')
const itemRouter = express.Router()

//Add Item
itemRouter.post('/additem' , itemController.additem)

//Get All Items
itemRouter.get('/getitem' , itemController.getitems)

