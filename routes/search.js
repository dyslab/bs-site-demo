var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var SearchDataReader = require('./search-data-reader')

/* GET search page. */
router.get('/', function (req, res, next) {
  // search-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/search')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = SearchDataReader.getPageInfo(req.query.term)

  // search page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-search', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
