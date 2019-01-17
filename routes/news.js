var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var NewsDataReader = require('./news-data-reader')
var CookieHandler = require('./cookie-handler.js')

/* GET news page. */
router.get('/', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/news', cookieObj)
  // get news page id and info
  var pageID = 1
  if (req.query.page && req.query.page !== undefined) pageID = parseInt(req.query.page)
  var pageInfo = NewsDataReader.getNewsListPageInfo(pageID, false,
    templatePageInfo.language.currentid, templatePageInfo.datamode)

  // *** Test template 2 ***
  templatePageInfo.templateID = 2

  // news page render
  res.render('template' + templatePageInfo.templateID + '-news-list', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

/* GET news details page. */
router.get('/details/:newsid', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/news', cookieObj)
  var pageInfo = NewsDataReader.getNewsDetailsPageInfo(req.params.newsid,
    templatePageInfo.language.currentid, templatePageInfo.datamode)

  // *** Test template 2 ***
  templatePageInfo.templateID = 2

  // news page render
  res.render('template' + templatePageInfo.templateID + '-news-details', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
