const Log = require('../models/log');

module.exports = {
  new: (req, res) => {
    res.render('New');
  },
  edit: async (req, res) => {
    const log = await Log.findById(req.params.id);
    res.render('Edit', { log });
  }
};
