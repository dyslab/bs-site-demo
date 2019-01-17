var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var AboutDataReader = require('./about-data-reader')
var CookieHandler = require('./cookie-handler.js')

// synchronize read data and render page
// eslint-disable-next-line no-unused-vars
function syncRenderPage (req, res) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/about', cookieObj)
  var pageInfo = AboutDataReader.getPageInfo(templatePageInfo.language.currentid, templatePageInfo.datamode)

  // *** Test template 2 ***
  templatePageInfo.templateID = 2

  // about page render
  res.render('template' + templatePageInfo.templateID + '-about', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
}

// synchronize read data and render page
// eslint-disable-next-line no-unused-vars
async function asyncRenderPage (req, res) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/about', cookieObj)
  var pageInfo = await AboutDataReader.asyncGetPageInfo(templatePageInfo.language.currentid, templatePageInfo.datamode)

  // about page render
  res.render('template' + templatePageInfo.templateID + '-about', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
}

/* GET about page. */
router.get('/', function (req, res, next) {
  syncRenderPage(req, res)
  // asyncRenderPage(req, res)
})

module.exports = router
