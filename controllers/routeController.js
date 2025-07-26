
//Imports for Routes 
const express = require('express')
const router = express.Router()
const viewController = require('./viewController')
const dataController = require('./dataController')


// Adding Routes for Each Functionality in app

//Index --> get
    router.get('/', dataController.index, viewController.index)
//New --> get
    router.get('/new', viewController.newView)
//Destroy --> delete
    router.delete('/:id', dataController.destroy, viewController.redirectHome)
//Update --> put
    router.put('/:id', dataController.update, viewController.redirectShow)
//Create --> post
    router.post('/', dataController.create, viewController.redirectHome)
//Edit --> get
    router.get('/:id/edit', dataController.show, viewController.edit)
//Show --> get
    router.get('/:id', dataController.show, viewController.show)
//Exporting Routes to use in server.js

module.exports = router 