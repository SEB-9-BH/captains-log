const Log = require('../models/log');

const dataController = {};

// Index
dataController.index = async (req, res, next) => {
  try {
    res.locals.data.logs = await Log.find({});
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Create
dataController.create = async (req, res, next) => {
  req.body.shipIsBroken = req.body.shipIsBroken === 'on';
  try {
    res.locals.data.log = await Log.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Destroy
dataController.destroy = async (req, res, next) => {
  try {
    await Log.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Edit
dataController.edit = async (req, res, next) => {
  try {
    res.locals.data.log = await Log.findById(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Update
dataController.update = async (req, res, next) => {
  req.body.shipIsBroken = req.body.shipIsBroken === 'on';
  try {
    res.locals.data.log = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Show
dataController.show = async (req, res, next) => {
  try {
    res.locals.data.log = await Log.findById(req.params.id);
    if (!res.locals.data.log) {
      throw new Error(`Log with id ${req.params.id} not found`);
    }
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = dataController;
