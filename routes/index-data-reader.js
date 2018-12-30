// index page data reader

// read page infomation and return
exports.getPageInfo = function () {
  var pageinfoObj = {
    pagetitle: 'HOME',
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
    }]
  }

  return pageinfoObj
}
