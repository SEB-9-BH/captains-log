const Log = require('../models/logs');
// Create Log Route - Create a new log from form data
const create = (req, res) => {
  const newLog = new Log({
    title: req.body.title,
    entry: req.body.entry,
    shipIsBroken: req.body.shipIsBroken === 'on', // Convert checkbox to boolean
  });
  newLog.save()
    .then(() => {
      res.redirect('/logs'); // Redirect to the index page after creating a new log
    })
    .catch((err) => {
      console.error('Error saving log:', err);
      res.status(500).send('Error saving log');
    });
};
// Update Log Route - Update an existing log's data
const update = (req, res) => {
  const logId = req.params.id;
  Log.findByIdAndUpdate(logId, {
    title: req.body.title,
    entry: req.body.entry,
    shipIsBroken: req.body.shipIsBroken === 'on', // Convert checkbox to boolean
  }, { new: true })
    .then((updatedLog) => {
      res.redirect('/logs'); // Redirect to the index page after updating the log
    })
    .catch((err) => {
      console.error('Error updating log:', err);
      res.status(500).send('Error updating log');
    });
};
// Delete Log Route - Delete a log from the database
const deleteLog = (req, res) => {
  const logId = req.params.id;
  Log.findByIdAndDelete(logId)
    .then(() => {
      res.redirect('/logs'); // Redirect back to the index page after deletion
    })
    .catch((err) => {
      console.error('Error deleting log:', err);
      res.status(500).send('Error deleting log');
    });
};
module.exports = {
  create,
  update,
  delete: deleteLog,
};