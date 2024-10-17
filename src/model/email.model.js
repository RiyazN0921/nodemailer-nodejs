const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema(
  {
    to: { type: String, required: true },
    from: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    sentAt: { type: Date, default: Date.now },
    replied: { type: Boolean, default: false },
    replyMessage: { type: String, default: null },
    replyAt: { type: Date, default: null },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Email', emailSchema)
