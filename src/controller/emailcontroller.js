const nodemailer = require('nodemailer')
const Email = require('../model/email.model')
const SMTPConfig = require('../model/smtpconfig.model')

exports.sendEmail = async (req, res) => {
  const { to, subject, message } = req.body

  const smtpConfig = await SMTPConfig.findOne()
  if (!smtpConfig) {
    return res.status(500).send('SMTP configuration not found')
  }

  let transporter = nodemailer.createTransport({
    host: process.env.GMAIL_USER,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: to,
    subject: subject,
    text: message,
  }

  try {
    await transporter.sendMail(mailOptions)

    const email = new Email({ to, from: smtpConfig.user, subject, message })
    await email.save()

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to send email', details: error.message })
  }
}

exports.getAllEmails = async (req, res) => {
  try {
    const emails = await Email.find()
    res.status(200).json(emails)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch emails' })
  }
}

exports.checkReplies = async (req, res) => {
  res.status(200).json({ message: 'Reply check is not implemented yet' })
}
