var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var IndexDataReader = require('./index-data-reader')
var AboutDataReader = require('./about-data-reader')

/* GET home page. */
router.get('/', function (req, res, next) {
  // index-data-reader
  var siteInfo = TemplateDataReader.getSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/')
  var pageInfo = IndexDataReader.getPageInfo()
  var aboutPartInfo = AboutDataReader.getPageInfoForIndex()

  // index page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-index', {
    siteinfo: siteInfo,
    navMenu: navMenu,
    pageinfo: pageInfo,
    aboutpartinfo: aboutPartInfo
  })
})

module.exports = router
