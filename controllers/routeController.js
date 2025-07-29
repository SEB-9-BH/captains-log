const Log = require('../models/log');

module.exports = {
  index: async (req, res) => {
    const logs = await Log.find();
    res.render('Index', { logs });
  },
  show: async (req, res) => {
    const log = await Log.findById(req.params.id);
    res.render('Show', { log });
  }
};
