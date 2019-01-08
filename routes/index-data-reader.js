// index page data reader

// read page infomation and return
exports.getPageInfo = function () {
  var pageinfoObj = {
    pagetitle: 'HOME',
    carouselpartvisible: 'true',
    carouseldata: [{
      image: '/imgs/promotion-carousel-01.jpg',
      caption: 'Imagination, Inspiration, Innovation<br><br><br>'
    }, {
      image: '/imgs/promotion-carousel-02.jpg',
      caption: '想象, 灵感, 创新<br><br><br>'
    }, {
      image: '/imgs/promotion-carousel-03.jpg',
      caption: 'Passion, Energy, Future<br><br><br>'
    }, {
      image: '/imgs/promotion-carousel-04.jpg',
      caption: '激情, 活力, 未来<br><br><br>'
    }],
    aboutpartvisible: 'true',
    timelinepartvisible: 'true',
    teampartvisible: 'true',
    newspartvisible: 'true',
    sliderpartvisible: 'true',
    slidertitle: 'OUR RECOMMENDATION',
    slidersubtitle: 'VISIT',
    sliderdata: [{
      image: '/imgs/slider-01.jpg',
      caption: 'HM0752',
      href: '#'
    }, {
      image: '/imgs/slider-02.jpg',
      caption: 'HM0903',
      href: '#'
    }, {
      image: '/imgs/slider-03.jpg',
      caption: 'HM0739',
      href: '#'
    }, {
      image: '/imgs/slider-04.jpg',
      caption: 'HM0725',
      href: '#'
    }, {
      image: '/imgs/slider-05.jpg',
      caption: 'HM0810',
      href: '#'
    }, {
      image: '/imgs/slider-06.jpg',
      caption: 'HM0738',
      href: '#'
    }],
    testimonialpartvisible: 'true'
  }

  return pageinfoObj
}
