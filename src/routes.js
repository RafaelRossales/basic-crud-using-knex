const express = require('express')
//Router from express
const routes = express.Router();

const UserController = require('./controllers/UserController.js')

routes.get('/users',UserController.index)
routes.post('/users',UserController.create)

module.exports = routes