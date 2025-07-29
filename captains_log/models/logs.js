const mongoose = require('mongoose');
// Define the log schema
const logSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // Title is required
  },
  entry: {
    type: String,
    required: true,  // Entry is required
  },
  shipIsBroken: {
    type: Boolean,
    default: true,  // Set default value to true
  }
});
// Create a model based on the schema
const Log = mongoose.model('Log', logSchema);
module.exports = Log;  // Export the model to use it in other files






