var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var ProductDataReader = require('./product-data-reader')

/* GET product item page by product id. */
router.get('/item/:productid', function (req, res, next) {
  // view: template1-product-item.pug
  res.send('Product "' + req.params.productid + '" page.')
})

/* GET all product page by page id. */
router.get('/all/:pageid', function (req, res, next) {
  // view: template1-product-all.pug
  res.send('All products "' + req.params.pageid + '" page.')
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
