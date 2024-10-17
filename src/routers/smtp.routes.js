const express = require('express')
const {
  createSMTPConfig,
  updateSMTPConfig,
} = require('../controller/smtpcontroller')
const router = express.Router()

router.post('/smtp', createSMTPConfig)
router.patch('/smtp/:id', updateSMTPConfig)

module.exports = router
