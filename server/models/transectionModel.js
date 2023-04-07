const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  machineid: { type: Schema.Types.ObjectId, ref: 'Machine' },
  employeeid: { type: Schema.Types.ObjectId, ref: 'Employee' },
  slotName: { type: String },
  transactionStatus: { type: String, enum: ['success', 'failed'] },
  employeeName: { type: String },
  department: { type: String },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;