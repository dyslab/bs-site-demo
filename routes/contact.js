var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var ContactDataReader = require('./contact-data-reader')
var FileHandler = require('./file-handler.js')

/* GET contact page. */
router.get('/', function (req, res, next) {
  // contact-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/contact')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = ContactDataReader.getPageInfo()

  // contact page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-contact', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

/* POST contact page. */
router.post('/sendmessage', function (req, res, next) {
  FileHandler.saveMessage(req.body)
  res.send('send message ok.')
})

module.exports = router
