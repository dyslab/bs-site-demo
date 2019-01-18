var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var SearchDataReader = require('./search-data-reader')
var CookieHandler = require('./cookie-handler.js')

/* GET search page. */
router.get('/', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/search', cookieObj)
  var pageInfo = SearchDataReader.getPageInfo(req.query.term,
    templatePageInfo.language.currentid, templatePageInfo.datamode)

  // *** Template Test ***
  if (cookieObj.preferred_templateID && cookieObj.preferred_templateID !== undefined) {
    templatePageInfo.templateID = cookieObj.preferred_templateID
  }

  // search page render
  res.render('template' + templatePageInfo.templateID + '-search', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
