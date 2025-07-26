const Log = require('../models/logs');

// New Log Form Route - Render the form for creating a new log
const newLog = (req, res) => {
  res.render('logs/New');
};

// Edit Log Form Route - Render the form for editing an existing log
const edit = (req, res) => {
  const logId = req.params.id;

  Log.findById(logId)
    .then((log) => {
      if (!log) {
        res.status(404).send('Log not found');
      } else {
        res.render('logs/Edit', { log });
      }
    })
    .catch((err) => {
      console.error('Error retrieving log:', err);
      res.status(500).send('Error retrieving log');
    });
};

module.exports = {
  newLog,
  edit,
};
