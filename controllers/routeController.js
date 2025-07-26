const Log = require('../models/logs');

// Index Route - Show all logs
const index = (req, res) => {
  Log.find()
    .then((logs) => {
      res.render('logs/Index', { logs });
    })
    .catch((err) => {
      console.error('Error retrieving logs:', err);
      res.status(500).send('Error retrieving logs');
    });
};

const show = (req, res) => {
  const logId = req.params.id;

  Log.findById(logId)
    .then((log) => {
      if (!log) {
        res.status(404).send('Log not found');
      } else {
        res.render('logs/Show', { log });
      }
    })
    .catch((err) => {
      console.error('Error retrieving log:', err);
      res.status(500).send('Error retrieving log');
    });
};

module.exports = {
  index,
  show,
};

