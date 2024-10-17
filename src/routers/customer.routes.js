const express = require('express')
const {
  addCustomer,
  updateCustomer,
} = require('../controller/customercontroller')
const router = express.Router()

router.post('/customer', addCustomer)
router.patch('/customer/:id', updateCustomer)

module.exports = router
