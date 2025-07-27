const Log = require('models/logs.js');

module.exports = {
  index(req, res, next) {
    Log.find().then(logs => {
      res.locals.logs = logs;
      next();
    });
  },

  create(req, res, next) {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on';
    Log.create(req.body).then(log => {
      res.locals.id = log._id;
      next();
    });
  },

  show(req, res, next) {
    Log.findById(req.params.id).then(log => {
      res.locals.log = log;
      next();
    });
  },

  edit(req, res, next) {
    Log.findById(req.params.id).then(log => {
      res.locals.log = log;
      next();
    });
  },

  update(req, res, next) {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on';
    Log.findByIdAndUpdate(req.params.id, req.body).then(() => next());
  },

  destroy(req, res, next) {
    Log.findByIdAndDelete(req.params.id).then(() => next());
  },

  redirectShow(req, res) {
    res.redirect(`/logs/${res.locals.id}`);
  },

  redirectIndex(req, res) {
    res.redirect('/logs');
  }
};
