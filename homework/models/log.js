const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true },
    shipIsBroken: Boolean
})

module.exports = mongoose.model('Log', logSchema)

