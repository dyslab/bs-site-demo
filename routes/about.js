var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var AboutDataReader = require('./about-data-reader')

/* GET about page. */
router.get('/', function (req, res, next) {
  // index-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/about')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = AboutDataReader.getPageInfo()

  // about page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-about', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

module.exports = router