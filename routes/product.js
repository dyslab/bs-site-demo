var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var ProductDataReader = require('./product-data-reader')

/* GET product item page by product id. */
router.get('/item/:productid', function (req, res, next) {
  // product-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/product')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = ProductDataReader.getItemPageInfo(req.params.productid)

  // all page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-product-item', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

/* GET all product page */
router.get('/all/', function (req, res, next) {
  // product-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/product')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = ProductDataReader.getAllPageInfo()

  // all page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-product-all', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

/* GET category page by category id. */
router.get('/category/:categoryid', function (req, res, next) {
  // product-data-reader
  var copyrightsiteInfo = TemplateDataReader.getCopyrightSiteInfo()
  var navMenu = TemplateDataReader.getNavMenu('/product')
  var searchInfo = TemplateDataReader.getSearchInfo()
  var subscribeInfo = TemplateDataReader.getSubscribeInfo()
  var getintouchInfo = TemplateDataReader.getGetInTouchInfo()
  var pageInfo = ProductDataReader.getCategoryPageInfo(req.params.categoryid)

  // category page render
  res.render('template' + TemplateDataReader.getTemplateID() + '-product-category', {
    copyrightsiteInfo: copyrightsiteInfo,
    navMenu: navMenu,
    searchInfo: searchInfo,
    subscribeInfo: subscribeInfo,
    getintouchInfo: getintouchInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
