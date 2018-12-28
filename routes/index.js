var express = require('express')
var router = express.Router()
var IndexDataReader = require('./index-data-reader')

/* GET home page. */
router.get('/', function (req, res, next) {
  // index-data-reader
  var templateID = IndexDataReader.getTemplateID()

  // index page render
  res.render('template' + templateID + '-index', {
    title: 'Bootstrap Demo Site #' + templateID
  })
})

module.exports = router
