const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const machineSchema = new Schema({
  machineid: { type: String, required: true, unique: true },
  companyName: { type: String, required: true },
  description: { type: String },
  installLocation: { type: String },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Machine = mongoose.model('Machine', machineSchema);
module.exports = Machine;