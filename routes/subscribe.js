var express = require('express')
var router = express.Router()

var FileHandler = require('./file-handler.js')

/* POST subscribe page. */
router.get('/', function (req, res, next) {
  FileHandler.saveSubscription(req.query)
  res.send('subscription info saved. [ok]')
})

module.exports = router
