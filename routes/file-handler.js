var fs = require('fs')
var path = require('path')

const FeedbackFilePath = path.join(__dirname, 'feedback')

// Format date string like '20180203','2018-12-19', '2018/12/19'...
function formatDate2yyyyMMdd (dateobj, speratechar) {
  return dateobj.getFullYear().toString() + speratechar +
         (dateobj.getMonth() >= 9 ? (dateobj.getMonth() + 1).toString() : '0' + (dateobj.getMonth() + 1).toString()) + speratechar +
         (dateobj.getDate() > 9 ? dateobj.getDate().toString() : '0' + dateobj.getDate().toString())
}

// Format time string like '220230','18:12:30'...
function formatDate2hhmmss (dateobj, speratechar) {
  return (dateobj.getHours() > 9 ? dateobj.getHours().toString() : '0' + dateobj.getHours().toString()) + speratechar +
         (dateobj.getMinutes() > 9 ? dateobj.getMinutes().toString() : '0' + dateobj.getMinutes().toString()) + speratechar +
         (dateobj.getSeconds() > 9 ? dateobj.getSeconds().toString() : '0' + dateobj.getSeconds().toString())
}

// Save message to file.
exports.saveMessage = function (message) {
  const dd = new Date()
  fs.appendFile(FeedbackFilePath + '/message.txt',
    formatDate2yyyyMMdd(dd, '/') + ' ' + formatDate2hhmmss(dd, ':') + ', ' + JSON.stringify(message) + '\n',
    (err) => {
      if (err) {
        console.log(err)
      }
    })
}

// Save subscription to file.
exports.saveSubscription = function (subscription) {
  const dd = new Date()
  fs.appendFile(FeedbackFilePath + '/subscription.txt',
    formatDate2yyyyMMdd(dd, '/') + ' ' + formatDate2hhmmss(dd, ':') + ', ' + JSON.stringify(subscription) + '\n',
    (err) => {
      if (err) {
        console.log(err)
      }
    })
}
