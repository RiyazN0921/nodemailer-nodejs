const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    addedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
)

const customerModel = mongoose.model('Customer', customerSchema)

module.exports = customerModel
