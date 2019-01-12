var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var AboutDataReader = require('./about-data-reader')
var CookieHandler = require('./cookie-handler.js')

/* GET about page. */
router.get('/', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/about', cookieObj)
  var pageInfo = AboutDataReader.getPageInfo(templatePageInfo.language.currentid, templatePageInfo.datamode)

  // about page render
  res.render('template' + templatePageInfo.templateID + '-about', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
