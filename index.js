const express = require('express')
const bodyParser = require('body-parser')
const emailRoutes = require('./src/routers/email.routes')
const smtpRoutes = require('./src/routers/smtp.routes')
const customerRoutes = require('./src/routers/customer.routes')
const { dbConnection } = require('./src/config/db.config')

const app = express()
app.use(bodyParser.json())

app.use('/api', emailRoutes)
app.use('/api', smtpRoutes)
app.use('/api', customerRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
  await dbConnection()
})
