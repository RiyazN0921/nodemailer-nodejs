const SMTPConfig = require('../model/smtpconfig.model')

exports.createSMTPConfig = async (req, res) => {
  const { host, port, secure, user, pass } = req.body

  try {
    const config = new SMTPConfig({ host, port, secure, user, pass })
    await config.save()
    res.status(200).json({ message: 'SMTP configuration created successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to create SMTP configuration' })
  }
}

exports.updateSMTPConfig = async (req, res) => {
  const { id } = req.params
  const { host, port, secure, user, pass } = req.body

  try {
    const config = await SMTPConfig.findByIdAndUpdate(id, {
      host,
      port,
      secure,
      user,
      pass,
      updatedAt: Date.now(),
    })
    res.status(200).json({ message: 'SMTP configuration updated successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
