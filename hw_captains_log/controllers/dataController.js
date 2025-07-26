const log = require('../models/logs.js')


const dataController = {};

// INDEX
dataController.index = async (req, res, next) => {
  try {
    res.locals.data = {};
    res.locals.data.logs = await log.find({});
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// CREATE
dataController.create = async (req, res, next) => {
  req.body.shipIsBroken = req.body.shipIsBroken === 'true';
  try {
    res.locals.data = {};
    res.locals.data.log = await log.create(req.body);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// SHOW
dataController.show = async (req, res, next) => {
  try {
    res.locals.data = {};
    res.locals.data.log = await log.findById(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// DELETE
dataController.destroy = async (req, res, next) => {
  try {
    await log.findOneAndDelete({ _id: req.params.id });
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// UPDATE
dataController.update = async (req, res, next) => {
  req.body.shipIsBroken = req.body.shipIsBroken === 'true';
  try {
    res.locals.data = {};
    res.locals.data.log = await log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    next();
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = dataController;