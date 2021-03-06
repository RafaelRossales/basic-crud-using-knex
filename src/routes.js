const express = require('express')
//Router from express
const routes = express.Router();

const UserController = require('./controllers/UserController.js')
const ProjectsController = require('./controllers/ProjectController.js')

routes
//Users
.get('/users',UserController.index)
.post('/users',UserController.create)
.put('/users/:id',UserController.update)
.delete('/users/:id',UserController.delete)

.get('/projects',ProjectsController.index)
.post('/projects',ProjectsController.create)
module.exports = routes