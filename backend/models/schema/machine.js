// import the dependencies module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema definition
let machineSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {
    collection: 'machines'
  })

module.exports = mongoose.model('Factory', machineSchema)