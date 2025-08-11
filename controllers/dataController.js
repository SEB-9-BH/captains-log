const Log = require('../models/log');

module.exports = {
  create: async (req, res) => {
    await Log.create(req.body);
    res.redirect('/logs');
  },
  update: async (req, res) => {
    await Log.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/logs/${req.params.id}`);
  },
  delete: async (req, res) => {
    await Log.findByIdAndDelete(req.params.id);
    res.redirect('/logs');
  }
};
