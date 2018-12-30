var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var AboutDataReader = require('./about-data-reader')

/* GET about page. */
router.get('/', function (req, res, next) {
  // index-data-reader
  var siteInfo = TemplateDataReader.getSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/about')
  var pageInfo = AboutDataReader.getPageInfo()

  // about page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-about', {
    siteinfo: siteInfo,
    navMenu: navMenu,
    pageinfo: pageInfo
  })
})

module.exports = router
