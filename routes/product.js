var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var ProductDataReader = require('./product-data-reader')

/* GET hotsale product page. */
router.get('/hotsale/', function (req, res, next) {
  res.send('Hotsale products page.')
})

/* GET all product page. */
router.get('/all/', function (req, res, next) {
  res.send('All products page.')
})

/* GET product page by product category id. */
router.get('/:categoryid', function (req, res, next) {
  // product-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/product')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = ProductDataReader.getPageInfo(req.params.categoryid)

  // product page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-product', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
