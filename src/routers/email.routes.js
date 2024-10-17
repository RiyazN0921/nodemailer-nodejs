const express = require('express')
const {
  sendEmail,
  getAllEmails,
  checkReplies,
} = require('../controller/emailcontroller')
const router = express.Router()

router.post('/send', sendEmail)
router.get('/emails', getAllEmails)
router.post('/check-replies', checkReplies)

module.exports = router
