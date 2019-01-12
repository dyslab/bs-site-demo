// product page data reader

// get product category list by categoryid and limitcount
//  categoryid: category id/name.
//  limitcount: the quantity of return items. eg. 0,1,2,3,4... Note: 0 means unlimited.
exports.getCatergoryList = function (categoryid, limitcount) {
  var catgoryListObj = [{
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
  }, {
    image: '/imgs/products/product-v20-t1.jpg',
    title: 'V20',
    content: 'Superior GPS Storage, Collect everything around you and store them',
    href: '/product/item/v20'
  }, {
    image: '/imgs/products/product-prod010-t1.jpg',
    title: 'PROD010',
    content: 'X-ray Sunglasses, Penetrate any barrier between you and the target',
    href: '/product/item/prod010'
  }, {
    image: '/imgs/products/product-cake001-t1.jpg',
    title: 'CAKE001',
    content: 'Chinese Energy Pie, Tasty and fill up your whole day energy',
    href: '/product/item/cake001'
  }]

  if (limitcount && limitcount > 0 && limitcount < catgoryListObj.length) {
    catgoryListObj = catgoryListObj.slice(0, limitcount)
  }

  return catgoryListObj
}

// read category list page infomation and return
exports.getCategoryPageInfo = function (categoryid, langid, datamode) {
  var pageinfoObj = {
    pagetitle: 'PRODUCT CATALOG',
    part1visible: 'true',
    part1title: 'OUR AMAZING PRODUCTS',
    part1subtitle: 'CHECK OUT NOW',
    part1content: 'Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...<br>Welcome to the products page, Pick up your favorite items and take them back home...Welcome to the products page, Pick up your favorite items and take them back home...',
    part1background: '/imgs/template1-product-title-bg.jpg',
    part2visible: 'true',
    part2title: 'PRODUCT CATEGORY',
    part2count: 20, // the quantity of visible items. eg. 0:unlimited, the number greater than 0 is the count of visible items.
    part2data: [],
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
      href: '/product/all/'
    }]
  }

  pageinfoObj.part2title = categoryid.toUpperCase()
  pageinfoObj.part2data = this.getCatergoryList(categoryid, pageinfoObj.part2count)

  return pageinfoObj
}

// read all category list infomation and return
exports.getAllPageInfo = function (langid, datamode) {
  var pageinfoObj = {
    pagetitle: 'ALL PRODUCTS',
    part1visible: 'true',
    part1title: 'ALL PRODUCTS',
    part1subtitle: 'WORTHY TO OWN',
    part1content: 'Welcome to all products page! We are just selling the blow-up-minding, innovative and creative products. Pick up your favorite items and take them back home...<br>欢迎来到全部产品页面，我们只卖别人无法想象的创新产品，挑选您喜欢的产品并把他们带回家...',
    part1background: '/imgs/template1-product-all-title-bg.jpg',
    part2visible: 'true',
    part2data: [{
      id: 'cat1',
      title: 'CAT1 - category 1',
      count: 0, // the quantity of visible items. eg. 0: unlimited, the number greater than 0 is the count of visible items.
      data: []
    }, {
      id: 'cat2',
      title: 'CAT2 - category 2',
      count: 4, // the quantity of visible items. eg. 0: unlimited, the number greater than 0 is the count of visible items.
      data: []
    }]
  }

  for (var i = 0; i < pageinfoObj.part2data.length; i++) {
    pageinfoObj.part2data[i].data = this.getCatergoryList(
      pageinfoObj.part2data[i].id.toLocaleLowerCase(),
      pageinfoObj.part2data[i].count
    )
  }

  return pageinfoObj
}

// read item infomation and return
exports.getItemPageInfo = function (productid, langid, datamode) {
  var pageinfoObj = {
    pagetitle: 'PRODUCT',
    part1visible: 'true',
    part1title: 'PRODUCT',
    part1subtitle: '',
    part1content: 'Welcome to check this out! We are just selling the blow-up-minding, innovative and creative products. Pick up your favorite items and take them back home...',
    part1background: '/imgs/template1-product-item-title-bg.jpg',
    part2visible: 'true',
    part2title: '',
    part2images: [
      '/imgs/products/product-v20-p1.png',
      '/imgs/products/product-v20-p2.png',
      '/imgs/products/product-v20-p3.jpg',
      '/imgs/products/product-v20-p4.jpg'
    ],
    part2lines: [{
      caption: 'Features:',
      text: 'Kirin 980 Processor|4800 MPixels Camera|4000 mAh Battery|Super Charge'
    }, {
      caption: 'Services:',
      text: 'Free Shipping|Free Return'
    }, {
      caption: 'Services:',
      text: 'Free Shipping|Free Return'
    }, {
      caption: 'SKU:',
      text: 'HUAWEI-V20'
    }, {
      caption: 'UPC/EAN:',
      text: '07629872545727<br>07629872545755'
    }, {
      caption: 'Color:',
      text: 'Blue|Red|Black'
    }, {
      caption: 'Size:',
      text: '34/35/36/37/38/39/40/41 EU'
    }, {
      caption: 'Pattern:',
      text: 'Double V Shape'
    }, {
      caption: 'Purchase:',
      text: '<b>Click here</b>',
      link: '/product/all/'
    }],
    part3visible: 'true',
    part3title: 'PRODUCT DETAILS',
    part3images: [
      '/imgs/products/product-v20-d1.jpg',
      '/imgs/products/product-v20-d2.jpg',
      '/imgs/products/product-v20-d3.jpg',
      '/imgs/products/product-v20-d4.jpg',
      '/imgs/products/product-v20-d5.jpg',
      '/imgs/products/product-v20-d6.jpg',
      '/imgs/products/product-v20-d7.jpg',
      '/imgs/products/product-v20-d8.jpg'
    ]
  }

  pageinfoObj.part2title = productid.toUpperCase()

  return pageinfoObj
}
