const cron = require('cron')
const { checkReplies } = require('../controller/emailcontroller')

const replyCheckerJob = new cron.CronJob('0 * * * *', () => {
  checkReplies()
})

replyCheckerJob.start()
