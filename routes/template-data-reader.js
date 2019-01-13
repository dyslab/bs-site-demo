// template data reader
var FileHandler = require('./file-handler.js')

// Data Access Mode, indicates to the data storage. eg. 'file','sqlite','mysql'...
// *** currently only JSON 'file' mode available. ***
const DataMode = 'file'

function getDefaultPageInfo () {
  var defaultPageInfoObj = {
    siteinfo: {
      headersitelogo: '/imgs/bootstrap-solid.svg',
      headersitename: 'BS DEMO SITE',
      footersitelogo: '/imgs/bootstrap-solid.svg',
      footersitename: 'Bootstrap Demonstration Website',
      copyrightprefix: 'Copyright',
      copyrightsuffix: 'All rights reserved.'
    },
    templateID: '1',
    language: {
      currentid: 'en',
      list: [{
        caption: '中文',
        id: 'cn'
      }, {
        caption: 'ENG',
        id: 'en'
      }]
    },
    navmenu: [
      { name: 'HOME', href: '/', submenu: [] },
      { name: 'ABOUT', href: '/about', submenu: [] },
      { name: 'PRODUCTS',
        href: '#',
        submenu: [
          { name: 'HOTSALE PRODUCTS', href: '/product/category/hotsale' },
          { name: 'PRODUCT CATEGORY 1', href: '/product/category/cat1' },
          { name: 'PRODUCT CATEGORY 2', href: '/product/category/cat2' },
          { name: '---', href: '#' },
          { name: 'ALL PRODUCTS', href: '/product/all/' }
        ]
      },
      { name: 'SERVICES',
        href: '#',
        submenu: [
          { name: 'CUSTOMER SERVICE', href: '/service/customer' },
          { name: 'DISTRIBUTOR SERVICE', href: '/service/distributor' }
        ]
      },
      { name: 'NEWS', href: '/news', submenu: [] },
      { name: 'CONTACT', href: '/contact', submenu: [] }
    ],
    searchinfo: {
      caption: 'SEARCH',
      holder: 'Search term',
      hint: 'Input yout search term here'
    },
    subscribeinfo: {
      headline: 'SUBSCRIBE TO US',
      caption: 'SUBSCRIBE',
      holder: 'Email address',
      hint: 'Input your email here',
      smalltips: 'Your privacy information will be legally protected.',
      responsetitle: 'THANKS FOR YOUR SUBSCRIPTION',
      responsecontent: 'Your email address has been enrolled to our database successfully. We will keep your privacy and will never share your email address with others.',
      responsebuttoncaption: 'CLOSE'
    },
    getintouchinfo: {
      headline: 'GET IN TOUCH WITH US',
      data: [{
        faicon: 'fab fa-facebook-f',
        href: '/news',
        ref: 'Facebook Link'
      }, {
        faicon: 'fab fa-qq',
        href: '/contact',
        ref: 'QQ Link'
      }, {
        faicon: 'fab fa-weixin',
        href: '/about',
        ref: 'Wechat Link'
      }, {
        faicon: 'fas fa-envelope',
        href: 'mailto:email@unknown.company',
        ref: 'Email Link'
      }]
    }
  }

  return defaultPageInfoObj
}

// read get in touch info data and return
exports.getTemplatePageInfo = function (currentpage, cookie) {
  var templatePageInfoObj = getDefaultPageInfo()

  // set current language by cookie
  var curid = templatePageInfoObj.language.currentid
  if (cookie && cookie !== undefined) {
    if (cookie.preferred_language && cookie.preferred_language !== undefined) {
      curid = cookie.preferred_language
    }
  }

  if (DataMode === 'file') {
    // read data from JSON file
    var tmpObj = FileHandler.getObjectFromJSONFile(curid, 'template')
    if (tmpObj && tmpObj !== undefined) templatePageInfoObj = tmpObj
  }

  // set datamode key/value as a pass parameter.
  templatePageInfoObj.datamode = DataMode
  templatePageInfoObj.language.currentid = curid

  // set copyright duration year.
  var dateObj = new Date()
  var thisYear = dateObj.getFullYear()
  if (thisYear > 2018) {
    templatePageInfoObj.siteinfo.copyright = templatePageInfoObj.siteinfo.copyrightprefix + ' © 2018-' + thisYear + '.'
  } else {
    templatePageInfoObj.siteinfo.copyright = templatePageInfoObj.siteinfo.copyrightprefix + ' © ' + thisYear + '.'
  }

  // set current page for navmenu
  for (var i = 0; i <= templatePageInfoObj.navmenu.length - 1; i++) {
    if (currentpage.length <= 1) {
      if (currentpage === templatePageInfoObj.navmenu[i].href) {
        templatePageInfoObj.navmenu[i].active = true
      } else {
        templatePageInfoObj.navmenu[i].active = false
      }
    } else {
      if (templatePageInfoObj.navmenu[i].href.search(currentpage) >= 0) {
        templatePageInfoObj.navmenu[i].active = true
      } else {
        templatePageInfoObj.navmenu[i].active = false
      }
    }
  }

  return templatePageInfoObj
}
