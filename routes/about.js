var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
// var AboutDataReader = require('./about-data-reader')

/* GET about page. */
router.get('/', function (req, res, next) {
  // index-data-reader
  var templateID = TemplateDataReader.getTemplateID()
  var navMenu = TemplateDataReader.getNavMenu('/about')

  // about page render
  res.render('template' + templateID + '-about', {
    title: 'ABOUT US',
    navMenu: navMenu,
    sitename: 'BS Demo Site #' + templateID
  })
})

module.exports = router
