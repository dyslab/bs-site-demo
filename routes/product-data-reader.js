// product page data reader

// read page infomation and return
exports.getPageInfo = function (categoryid) {
  var pageinfoObj = {
    pagetitle: 'PRODUCTS',
    part1title: 'OUR AMAZING PRODUCTS',
    part1subtitle: 'CHECK OUT NOW',
    part1content: 'Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...<br>Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...',
    part1background: '/imgs/template1-product-title-bg.jpg',
    part2title: 'PRODUCT CATEGORY',
    part2data: [{
      image: '/imgs/template1-service-privilege2.png',
      title: 'VIP 1 on 1',
      content: 'Click the link below to enjoy the customer 1 on 1 privilege service online.',
      linktext: '1 on 1 Service Channel >',
      href: '#'
    }, {
      image: '/imgs/template1-service-privilege3.png',
      title: 'Money Back Service',
      content: 'Customize Money Back Package for VIP customers, you can earn more than you paid after 18 months trial.',
      linktext: 'Start Your Money Back Project >',
      href: '#'
    }]
  }

  pageinfoObj.part2title = pageinfoObj.part2title + ' "' + categoryid.toUpperCase() + '"'

  return pageinfoObj
}
