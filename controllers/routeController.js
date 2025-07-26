const express = require('express');
const router = express.Router();
const viewController = require('./viewController.js');
const dataController = require('./dataController.js');

// RESTful Routes
router.get('/', dataController.index, viewController.index);
router.get('/new', viewController.newView);
router.post('/', dataController.create, viewController.redirectHome);
router.get('/:id', dataController.show, viewController.show);
router.get('/:id/edit', dataController.show, viewController.edit);
router.put('/:id', dataController.update, viewController.redirectShow);
router.delete('/:id', dataController.destroy, viewController.redirectHome);

module.exports = router;
