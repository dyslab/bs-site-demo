var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var IndexDataReader = require('./index-data-reader')
var AboutDataReader = require('./about-data-reader')

/* GET home page. */
router.get('/', function (req, res, next) {
  // index-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = IndexDataReader.getPageInfo()
  var aboutPartInfo = AboutDataReader.getPageInfoForIndex()

  // index page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-index', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo,
    aboutpartinfo: aboutPartInfo
  })
})

module.exports = router
