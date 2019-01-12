var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var ProductDataReader = require('./product-data-reader')
var CookieHandler = require('./cookie-handler.js')

/* GET product item page by product id. */
router.get('/item/:productid', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/product', cookieObj)
  var pageInfo = ProductDataReader.getItemPageInfo(req.params.productid,
    templatePageInfo.language.currentid, templatePageInfo.datamode)

  // all page render
  res.render('template' + templatePageInfo.templateID + '-product-item', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

/* GET all product page */
router.get('/all/', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/product', cookieObj)
  var pageInfo = ProductDataReader.getAllPageInfo(templatePageInfo.language.currentid, templatePageInfo.datamode)

  // all page render
  res.render('template' + templatePageInfo.templateID + '-product-all', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

/* GET category page by category id. */
router.get('/category/:categoryid', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/product', cookieObj)
  var pageInfo = ProductDataReader.getCategoryPageInfo(req.params.categoryid,
    templatePageInfo.language.currentid, templatePageInfo.datamode)

  // category page render
  res.render('template' + templatePageInfo.templateID + '-product-category', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
