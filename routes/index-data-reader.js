// index page data reader
var FileHandler = require('./file-handler.js')

function getDefaultPageInfo () {
  var defaultPageInfoObj = {
    pagetitle: 'HOME',
    carouselpartvisible: 'true',
    carouseldata: [{
      image: '/imgs/promotion-carousel-01.jpg',
      caption: 'Imagination, Inspiration, Innovation',
      captionpos: '45%'
    }, {
      image: '/imgs/promotion-carousel-02.jpg',
      caption: '想象, 灵感, 创新',
      captionpos: '60%'
    }, {
      image: '/imgs/promotion-carousel-03.jpg',
      caption: 'Passion, Energy, Future',
      captionpos: '75%'
    }, {
      image: '/imgs/promotion-carousel-04.jpg',
      caption: '激情, 活力, 未来',
      captionpos: '90%'
    }],
    aboutpartvisible: 'true',
    timelinepartvisible: 'true',
    teampartvisible: 'true',
    newspartvisible: 'true',
    sliderpartvisible: 'true',
    slidertitle: 'PROMOTION',
    slidersubtitle: 'VISIT',
    sliderdata: [{
      image: '/imgs/slider-01.jpg',
      caption: 'HM0752',
      href: '/product/item/hm0752'
    }, {
      image: '/imgs/slider-02.jpg',
      caption: 'HM0903',
      href: '/contact'
    }, {
      image: '/imgs/slider-03.jpg',
      caption: 'HM0739',
      href: '/service/customer'
    }, {
      image: '/imgs/slider-04.jpg',
      caption: 'HM0725',
      href: '/news'
    }, {
      image: '/imgs/slider-05.jpg',
      caption: 'HM0810',
      href: '/product/all/'
    }, {
      image: '/imgs/slider-06.jpg',
      caption: 'HM0738',
      href: '/about'
    }],
    testimonialpartvisible: 'true'
  }

  return defaultPageInfoObj
}

// read page infomation and return
exports.getPageInfo = function (langid, datamode) {
  var pageinfoObj = getDefaultPageInfo()

  if (datamode === 'file') {
    // read data from JSON file
    var tmpObj = FileHandler.getObjectFromJSONFile(langid, 'index')
    if (tmpObj && tmpObj !== undefined) pageinfoObj = tmpObj
  }

  return pageinfoObj
}
