const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
  title: String,
  entry: String,
  shipIsBroken: Boolean
}, { timestamps: true })  // <-- This adds createdAt and updatedAt fields automatically

module.exports = mongoose.model('Log', logSchema)
