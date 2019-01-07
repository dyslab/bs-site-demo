var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var ServiceDataReader = require('./service-data-reader')

/* GET service page by service id. */
router.get('/:serviceid', function (req, res, next) {
  // service-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/service')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = ServiceDataReader.getPageInfo(req.params.serviceid)
  // console.log(req.params.serviceid)

  // service page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-service', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
