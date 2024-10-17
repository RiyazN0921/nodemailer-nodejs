require('dotenv').config()

const mongoose = require('mongoose')

exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Database Connection Successful')
  } catch (error) {
    console.error(error)
  }
}
