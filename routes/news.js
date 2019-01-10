var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var NewsDataReader = require('./news-data-reader')

/* GET news page. */
router.get('/', function (req, res, next) {
  // news-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/news')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()

  // get page id
  var pageID = 1
  if (req.query.page && req.query.page !== undefined) pageID = parseInt(req.query.page)
  var pageInfo = NewsDataReader.getNewsListInfo(pageID)

  // news page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-news-list', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

/* GET news details page. */
router.get('/details/:newsid', function (req, res, next) {
  // news-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/news')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()

  var newsID = parseInt(req.params.newsid)
  var pageInfo = NewsDataReader.getNewsDetailsInfo(newsID)

  // news page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-news-details', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
