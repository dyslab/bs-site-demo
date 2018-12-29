var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
// var IndexDataReader = require('./index-data-reader')

/* GET home page. */
router.get('/', function (req, res, next) {
  // index-data-reader
  var templateID = TemplateDataReader.getTemplateID()
  var navMenu = TemplateDataReader.getNavMenu('/')

  // index page render
  res.render('template' + templateID + '-index', {
    title: 'HOME',
    navMenu: navMenu,
    sitename: 'BS Demo Site #' + templateID
  })
})

module.exports = router
