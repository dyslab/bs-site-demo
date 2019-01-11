// template data reader

// return template ID
exports.getTemplateID = function () {
  return 1
}

// return true value if it is using file system to read and save data currently. or else return false.
exports.isFileMode = function () {
  return true
}

// return true value if it is using file system to read and save data currently. or else return false.
exports.getLanguageID = function () {
  return 'en'
}

// read site infomation and return
exports.getCopyrightSiteInfo = function () {
  var copyrightsiteinfoObj = {
    sitename: 'BS DEMO SITE',
    copyrightprefix: 'Copyright',
    copyrightsuffix: 'All rights reserved.'
  }

  var dateObj = new Date()
  var thisYear = dateObj.getFullYear()
  if (thisYear > 2018) {
    copyrightsiteinfoObj.copyright = copyrightsiteinfoObj.copyrightprefix + ' © 2018-' + thisYear + '.'
  } else {
    copyrightsiteinfoObj.copyright = copyrightsiteinfoObj.copyrightprefix + ' © ' + thisYear + '.'
  }

  return copyrightsiteinfoObj
}

// read NavMenu data and return
exports.getNavMenu = function (currentPage) {
  var menuObj = [
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
  ]

  for (var i = 0; i <= menuObj.length - 1; i++) {
    if (currentPage.length <= 1) {
      if (currentPage === menuObj[i].href) {
        menuObj[i].active = true
      } else {
        menuObj[i].active = false
      }
    } else {
      if (menuObj[i].href.search(currentPage) >= 0) {
        menuObj[i].active = true
      } else {
        menuObj[i].active = false
      }
    }
  }

  return menuObj
}

// read search info data and return
exports.getSearchInfo = function () {
  var searchinfoObj = {
    caption: 'SEARCH',
    holder: 'Search term',
    hint: 'Input yout search term here'
  }

  return searchinfoObj
}

// read subscribe info data and return
exports.getSubscribeInfo = function () {
  var subscribeinfoObj = {
    headline: 'SUBSCRIBE TO US',
    caption: 'SUBSCRIBE',
    holder: 'Email address',
    hint: 'Input your email here',
    smalltips: 'Subsribe to our product monthly information. We\'ll never ever share your email with anyone else.',
    responsetitle: 'THANKS FOR YOUR SUBSCRIPTION',
    responsecontent: 'Your email address has been enrolled to our database successfully. We will keep your privacy and will never share your email address with others.',
    responsebuttoncaption: 'CLOSE'
  }

  return subscribeinfoObj
}

// read get in touch info data and return
exports.getGetInTouchInfo = function () {
  var getintouchObj = {
    headline: 'GET IN TOUCH WITH US',
    data: [{
      faicon: 'fab fa-facebook-f',
      href: 'facebook',
      ref: 'Facebook Link'
    }, {
      faicon: 'fab fa-qq',
      href: 'qq',
      ref: 'QQ Link'
    }, {
      faicon: 'fab fa-weixin',
      href: 'wechat',
      ref: 'Wechat Link'
    }, {
      faicon: 'fas fa-envelope',
      href: 'mailto:email@unknown.company',
      ref: 'Email Link'
    }]
  }

  return getintouchObj
}
