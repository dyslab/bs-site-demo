var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var NewsDataReader = require('./news-data-reader')

/* GET about page. */
router.get('/', function (req, res, next) {
  // index-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/news')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()

  // get page id
  var pageID = 1
  if (req.query.page && req.query.page !== undefined) pageID = parseInt(req.query.page)
  var pageInfo = NewsDataReader.getPageInfo(pageID)

  // about page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-news', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
