const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const viewController = require('../controllers/viewController');

router.get('/', dataController.index, viewController.index);
router.get('/new', viewController.newView);
router.delete('/:id', dataController.destroy, viewController.redirectHome);
router.put('/:id', dataController.update, viewController.redirectShow);
router.get('/:id/edit', dataController.show, viewController.editView);
router.get('/:id', dataController.show, viewController.showView);
router.post('/', dataController.create, viewController.redirectShow);

module.exports = router;