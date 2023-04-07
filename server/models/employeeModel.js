const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeid: { type: String, required: true, unique: true },
  companyName: { type: String, required: true },
  employeeName: { type: String, required: true },
  cardNo: { type: String, required: true, unique: true },
  email: { type: String },
  contactNo: { type: String },
  department: { type: String },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;