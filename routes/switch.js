var express = require('express')
var router = express.Router()
var CookieHandler = require('./cookie-handler.js')

/* POST switcher page. */
router.get('/', function (req, res, next) {
  // Debug output
  console.log(`------ switch.js/route.get(): switch to language: ${req.query.lang}, template id: ${req.query.tempid} ------`);
  
  if (req.query.lang && req.query.lang !== undefined) {
    // switch language
    CookieHandler.setPreferredLanguage(res, req.query.lang)
  }

  if (req.query.tempid && req.query.tempid !== undefined) {
    // switch templateID
    CookieHandler.setTemplateID(res, req.query.lang, req.query.tempid)
  }

  res.redirect(req.get('referer'))
})

module.exports = router
