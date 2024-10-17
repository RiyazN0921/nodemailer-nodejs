const customerModel = require('../model/smtpconfig.model')

exports.addCustomer = async (req, res) => {
  const { email, name } = req.body

  try {
    const customer = new customerModel({ email, name })
    await customer.save()
    res.status(200).json({ message: 'Customer added successfully' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to add customer', details: error.message })
  }
}

exports.updateCustomer = async (req, res) => {
  const { id } = req.params
  const { email, name } = req.body

  try {
    const customer = await customerModel.findByIdAndUpdate(id, { email, name })
    res.status(200).json({ message: 'Customer updated successfully' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to update customer', details: error.message })
  }
}
