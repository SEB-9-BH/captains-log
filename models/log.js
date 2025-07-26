const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  title: { type: String, required: true },
  entry: String,
  shipIsBroken: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Log', logSchema);
