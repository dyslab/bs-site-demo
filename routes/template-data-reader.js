// template data reader

// return template ID
exports.getTemplateID = function () {
  return 1
}

// read site infomation and return
exports.getSiteInfo = function () {
  var siteinfoObj = {
    sitename: 'BS DEMO SITE',
  }

  var dateObj = new Date()
  var thisYear = dateObj.getFullYear()
  if (thisYear > 2018) {
    siteinfoObj.copyright = 'Copyright © 2018-' + thisYear + '.'
  } else {
    siteinfoObj.copyright = 'Copyright © ' + thisYear + '.'
  }

  return siteinfoObj
}

// read NavMenu data and return
exports.getNavMenu = function (currentPage) {
  var menuObj = [
    { name: 'HOME', href: '/', submenu: [] },
    { name: 'ABOUT', href: '/about', submenu: [] },
    { name: 'PRODUCTS',
      href: '#',
      submenu: [
        { name: 'PRODUCT CATEGORY 1', href: '/product/category1' },
        { name: 'PRODUCT CATEGORY 2', href: '/product/category2' },
        { name: 'PRODUCT CATEGORY 3', href: '/product/category3' },
        { name: '---', href: '#' },
        { name: 'PRODUCT CATEGORY 11', href: '/product/category11' },
        { name: 'PRODUCT CATEGORY 12', href: '/product/category12' }
      ]
    },
    { name: 'SERVICES',
      href: '#',
      submenu: [
        { name: 'CUSTOMER SERVICE', href: '/service/id1' },
        { name: 'DISTRIBUTOR SERVICE', href: '/service/id2' }
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
