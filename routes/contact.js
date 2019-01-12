var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var ContactDataReader = require('./contact-data-reader')
var FileHandler = require('./file-handler.js')
var CookieHandler = require('./cookie-handler.js')

/* GET contact page. */
router.get('/', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/contact', cookieObj)
  var pageInfo = ContactDataReader.getPageInfo(templatePageInfo.language.currentid, templatePageInfo.datamode)

  // contact page render
  res.render('template' + templatePageInfo.templateID + '-contact', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

/* POST contact page. */
router.post('/sendmessage', function (req, res, next) {
  FileHandler.saveMessage(req.body)
  res.send('send message ok.')
})

module.exports = router
