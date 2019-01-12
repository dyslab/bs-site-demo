var express = require('express')
var router = express.Router()
var CookieHandler = require('./cookie-handler.js')

/* POST subscribe page. */
router.get('/', function (req, res, next) {
  CookieHandler.setPreferredLanguage(res, req.query.lang)
  res.redirect(req.get('referer'))
})

module.exports = router
