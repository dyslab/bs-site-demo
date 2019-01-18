var express = require('express')
var router = express.Router()

var TemplateDataReader = require('./template-data-reader')
var ServiceDataReader = require('./service-data-reader')
var CookieHandler = require('./cookie-handler.js')

/* GET service page by service id. */
router.get('/:serviceid', function (req, res, next) {
  // read page info
  var cookieObj = CookieHandler.getCookies(req)
  var templatePageInfo = TemplateDataReader.getTemplatePageInfo('/service', cookieObj)
  var pageInfo = ServiceDataReader.getPageInfo(req.params.serviceid,
    templatePageInfo.language.currentid, templatePageInfo.datamode)

  // *** Template Test ***
  if (cookieObj.preferred_templateID && cookieObj.preferred_templateID !== undefined) {
    templatePageInfo.templateID = cookieObj.preferred_templateID
  }

  // service page render
  res.render('template' + templatePageInfo.templateID + '-service', {
    templatepageinfo: templatePageInfo,
    pageinfo: pageInfo
  })
})

module.exports = router
