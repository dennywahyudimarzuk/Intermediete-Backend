const usersRoutes = require('express').Router()
const usersController = require('../Controller/Users')

usersRoutes.get('/', usersController.getAllUsers)
usersRoutes.delete('/:id', usersController.deleteUser)
usersRoutes.post('/', usersController.postUser)


module.exports = usersRoutes