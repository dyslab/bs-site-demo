// news page data reader
var FileHandler = require('./file-handler.js')

function getDefaultPageInfo (id) {
  var defaultListPageInfoObj = {
    pagetitle: 'NEWS',
    newsperpage: 12,
    part1visible: 'true',
    part1title: 'NEWS',
    part1subtitle: '',
    part1content: 'Check out the latest news and events about us below. Feel free to subscribe our monthly mail news and product information if you would like to know us more.',
    part1background: '/imgs/template1-news-title-bg.jpg',
    part2visible: 'true',
    part2title: 'LASTEST NEWS',
    part2subtitle: 'FOLLOW US',
    part2data: [{
      headline: 'Xi, Kim hold talks, reaching important consensus',
      faicon: 'far fa-newspaper',
      date: '2019-1-11',
      shorttext: 'The two leaders of China and DPRK had an in-depth exchange of views on bilateral relations and issues of common concern, and reached important consensus....',
      href: '/news/details/2019011100'
    }, {
      headline: 'First probe lands on moon\'s \'dark\' side',
      faicon: 'far fa-newspaper',
      date: '2019-1-4',
      shorttext: 'Breakthrough opens new page in historyof space exploration, A new chapter opened in mankind\'s exploration of the moon on Thursday morning as the first probe to land on the moon\'s far side reached its destination after a 26-day journey...',
      href: '/news/details/2019010401'
    }, {
      headline: '28 injured in Sicily in earthquake triggered by volcano eruption',
      faicon: 'far fa-newspaper',
      date: '2018-12-28',
      shorttext: 'Twenty-eight people were injured in Italy\'s Sicily on Wednesday in an earthquake triggered by the eruption of Mount Etna, Italian authorities said...',
      href: '/news/details/2018122820'
    }, {
      headline: '告别2018，人类群星远行时Condolence to the stars...',
      faicon: 'fas fa-newspaper',
      date: '2018-12-27',
      shorttext: '<b>星星沉落在海洋中央，一支支歌曲在我心中消亡。</b>——卡尔杜齐《离别》节选...创伤的世界与幻想的江湖...微小至纤维，无垠至宇宙...世界大爆炸...生活在别处...',
      href: '/news/details/2018122700'
    }, {
      headline: '中国海军非洲之角护航记事之一：10年护航显成效',
      faicon: 'fas fa-newspaper',
      date: '2018-12-16',
      shorttext: '2008年12月16日，中国海军首批护航编队解缆起航，赴亚丁湾、索马里海域执行护航任务。回看过去10年间，中国海军护航亚丁湾的成效已经显现...',
      href: '/news/details/2018121600'
    }, {
      headline: 'China, U.S. may meet in January for trade negotiation',
      faicon: 'far fa-newspaper',
      date: '2018-9-13',
      shorttext: 'The delegations of China and the U.S. have stayed in close communication and have made plans to meet face-to-face in January...',
      href: '/news/details/2018091300'
    }]
  }

  var defaultDetialsPageInfoObj = {
    pagetitle: 'NEWS DETAILS',
    part1visible: 'true',
    part1title: 'NEWS',
    part1subtitle: 'NEWS SUBTITLE',
    part1content: 'Check out the latest news and events about us below. Feel free to subscribe our monthly mail news and product information if you would like to know us more.',
    part1background: '/imgs/template1-news-details-title-bg.jpg',
    part2visible: 'true',
    part2data: {
      headline: 'TEST TITLE : First probe lands on moon\'s \'dark\' side',
      faicon: 'far fa-newspaper',
      date: '2019-1-4',
      text: 'The Chang\'e 4 lunar probe, representing China\'s latest step in lunar investigation, landed at 10:26 am at the Von Karman crater in the South Pole-Aitken basin and then sent back three photos of the landing site shot by cameras on the probe\'s lander, marking the world\'s first images taken on the surface of the far side.<br><br> One of the photos, published by the China National Space Administration, shows the place where Chang\'e 4\'s rover, which was named Yutu 2 on Thursday night, will be heading to explore and survey.<br><br> Thus began the first expedition to the side of the moon that faces away from the Earth.<br><br> It is meant to fulfill scientists\' long-held aspiration to closely observe the lesser known region.<br><br> Tidal forces on Earth slow the moon\'s rotation to the point that the same side always faces Earth.<br><br> Most of the far side is never visible from Earth.<br><br> While it has been extensively photographed by spacecraft, starting with a Soviet probe in 1959, no probe had ever made a soft landing there, so scientists had not been able to conduct surface-level observations and surveys of the region.<br><br> According to the China National Space Administration, Chang\'e 4\'s landing procedure started at 10:15 am, when it began its descent from an orbit 15 kilometers above the surface, following control signals from the Beijing Aerospace Control Center transmitted through China\'s Queqiao relay satellite.<br><br> The probe made position adjustments when it reached 6 to 8 kilometers above the moon.<br><br> The descent then paused at about 100 meters above the surface as the spacecraft analyzed the gradient of the preset landing site as well as any possible obstacles in order to avoid hazards.<br><br> After an exact landing area was determined, Chang\'e 4 resumed its descent at a slow velocity and finally touched down, the administration said in a statement. <p><figure class="figure"><img class="figure-img img-fluid rounded" src="/imgs/news-5c2e6213a310686029de4ab7.jpg"><figcaption class="figure-caption">The first closeup image ever taken of the far side’s surface, photographed by the lunar lander, shows the route planned for the rover. </figcaption></figure></p>XINHUA Shortly afterward, the probe unfolded its solar arrays and antennas and established a high-speed data link through Queqiao, it said. Wu Weiren, chief designer of China\'s lunar program, said in Beijing on Thursday after the landing that the descent and landing "were perfect". <br><br>He called the event "an important milestone for China\'s space exploration", adding that it has made a good start for future lunar exploration efforts. <br><br>With its investigation of the far side, particularly the Von Karman crater, the Chang\'e 4 mission will enable scientists to find out what they haven\'t known about the moon and deepen their knowledge of its early history and of the solar system. <br><br>Researchers also can use the far side\'s shield against Earth\'s interference to make clearer observations into deep space, scientists expect. Zhang He, executive director of the Chang\'e 4 program at the China Academy of Space Technology, said, "As there had been no probe on the far side before us, all scientific information obtained by the Chang\'e 4 will be new to the world."'
    },
    part2backtext: ' GO BACK '
  }

  if (id === 'list') return defaultListPageInfoObj
  else return defaultDetialsPageInfoObj
}

// read news details page information and return
exports.getNewsDetailsPageInfo = function (newsid, langid, datamode) {
  var newsDetailsObj = getDefaultPageInfo('details')

  if (datamode === 'file') {
    // read data from JSON file
    var tmpObj = FileHandler.getObjectFromJSONFile(langid, 'news_details', newsid)
    if (tmpObj && tmpObj !== undefined) newsDetailsObj = tmpObj
  }

  return newsDetailsObj
}

// read news list page infomation and return
exports.getNewsListPageInfo = function (pageid, getall, langid, datamode) {
  var pageinfoObj = getDefaultPageInfo('list')

  if (datamode === 'file') {
    // read data from JSON file
    var tmpObj = FileHandler.getObjectFromJSONFile(langid, 'news_list')
    if (tmpObj && tmpObj !== undefined) pageinfoObj = tmpObj
  }

  if (!getall || getall === undefined) {
    // get the news count for each page.
    var RecordsPerPage = 30
    if (pageinfoObj.newsperpage && pageinfoObj.newsperpage > 0) RecordsPerPage = pageinfoObj.newsperpage

    // set return object's pageid, maxpage and the exact records for specific page by input patameter 'pageid'. maximum count per page is defined by 'RecordsPerPage'.
    pageinfoObj.pageid = pageid
    if (pageinfoObj.part2data.length > RecordsPerPage) {
      pageinfoObj.maxpage = parseInt(pageinfoObj.part2data.length / RecordsPerPage)
      if (pageinfoObj.maxpage * RecordsPerPage < pageinfoObj.part2data.length) pageinfoObj.maxpage++
      var startid = pageinfoObj.part2data.length - pageid * RecordsPerPage
      if (startid < 0) startid = 0
      pageinfoObj.part2data = pageinfoObj.part2data.slice(startid, pageinfoObj.part2data.length - (pageid - 1) * RecordsPerPage)
    } else {
      pageinfoObj.maxpage = 1
    }
  }

  return pageinfoObj
}

// read page infomation for index page and return
exports.getPageInfoForIndex = function (langid, datamode) {
  var pageObj = this.getNewsListPageInfo(1, false, langid, datamode)

  if (pageObj.part2data.length > 4) {
    pageObj.part2data = pageObj.part2data.slice(0, 4)
  }

  return pageObj
}
