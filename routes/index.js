var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var IndexDataReader = require('./index-data-reader')
var AboutDataReader = require('./about-data-reader')
var NewsDataReader = require('./news-data-reader')
var CookieHandler = require('./cookie-handler.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/', cookieObj)
  var pageInfo = IndexDataReader.getPageInfo(templatePageInfo.language.currentid, templatePageInfo.datamode)
  var aboutPartInfo = AboutDataReader.getPageInfoForIndex(templatePageInfo.language.currentid, templatePageInfo.datamode)
  var newsPartInfo = NewsDataReader.getPageInfoForIndex(templatePageInfo.language.currentid, templatePageInfo.datamode)

  // index page render
  res.render('template' + templatePageInfo.templateID + '-index', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo,
    aboutpartinfo: aboutPartInfo,
    newsPartInfo: newsPartInfo
  })
})

module.exports = router
