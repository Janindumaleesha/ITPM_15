const express = require('express')
const UserController = require('../controllers/user.controllers')
const UserRouter = express.Router()

//USER REGISTER 
UserRouter.post('/register' , UserController.userRegister)

//USER LOGIN
UserRouter.post('/login' , UserController.userLogin)

module.exports = UserRouter