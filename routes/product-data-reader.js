// product page data reader

// read page infomation and return
exports.getCategoryPageInfo = function (categoryid) {
  var pageinfoObj = {
    pagetitle: 'PRODUCTS',
    part1visible: 'true',
    part1title: 'OUR AMAZING PRODUCTS',
    part1subtitle: 'CHECK OUT NOW',
    part1content: 'Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...<br>Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...',
    part1background: '/imgs/template1-product-title-bg.jpg',
    part2visible: 'true',
    part2title: 'PRODUCT CATEGORY',
    part2data: [{
      image: '/imgs/products/product-prod001-t1.jpg',
      title: 'PROD001',
      content: 'Space Pymaid, Easy to use, One click change location',
      href: '/product/item/prod001'
    }, {
      image: '/imgs/products/product-prod002-t1.jpg',
      title: 'PROD002',
      content: 'VIVO X23 Grenade, A Powerful bomb and looks like a famous cellphone',
      href: '/product/item/prod002'
    }, {
      image: '/imgs/products/product-hm0752-t1.jpg',
      title: 'HM0752',
      content: 'Shaped-like Flip Flops Energy Recharger, Recharge feet energy anywhere anytime',
      href: '/product/item/hm0752'
    }, {
      image: '/imgs/products/product-dog003-t1.jpg',
      title: 'DOG-003',
      content: 'Coolest VR puppy doll, Feed him just like feed your other pets',
      href: '/product/item/dog-003'
    }, {
      image: '/imgs/products/product-g1001-t1.jpg',
      title: 'G1001',
      content: 'Next Generation Laser Gun, Probably the best automatic rifle that you met',
      href: '/product/item/g1001'
    }],
    part3visible: 'true',
    part3data: [{
      image: '/imgs/products/product-cat-link-formore.png',
      href: ''
    }, {
      image: '/imgs/products/product-cat-link-hot.png',
      href: '/product/category/hotsale'
    }, {
      image: '/imgs/products/product-cat-link-cat1.png',
      href: '/product/category/cat1'
    }, {
      image: '/imgs/products/product-cat-link-cat2.png',
      href: '/product/category/cat2'
    }, {
      image: '/imgs/products/product-cat-link-all.png',
      href: '/product/all/first'
    }]
  }

  pageinfoObj.part2title = categoryid.toUpperCase()

  return pageinfoObj
}
