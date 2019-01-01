// about page data reader

// read page infomation and return
exports.getPageInfo = function (pageid) {
  var pageinfoObj = {
    pagetitle: 'NEWS',
    part1title: 'NEWS',
    part1subtitle: '',
    part1content: 'Check out the latest news and events about us below. Feel free to subscribe our monthly mail news and product information if you like us.',
    part1background: '/imgs/template1-news-title-bg.jpg',
    part2title: 'NEWS LIST',
    part2data: [{
      headline: '28 injured in Sicily in earthquake triggered by volcano eruption',
      faicon: 'far fa-newspaper',
      date: '2018-12-28',
      shorttext: 'Twenty-eight people were injured in Italy\'s Sicily on Wednesday in an earthquake triggered by the eruption of Mount Etna, Italian authorities said...',
      text: 'Twenty-eight people were injured in Italy\'s Sicily on Wednesday in an earthquake triggered by the eruption of Mount Etna, Italian authorities said...<br>The inspiration just like a light bulb, always driving us creatively productive. This story comes from 2018...<br>灵感就像电灯泡。故事源于2018年...'
    }, {
      headline: '告别2018，人类群星远行时Condolence to the stars...',
      faicon: 'fas fa-newspaper',
      date: '2018-12-26',
      shorttext: '<b>星星沉落在海洋中央，一支支歌曲在我心中消亡。</b>——卡尔杜齐《离别》节选...创伤的世界与幻想的江湖...微小至纤维，无垠至宇宙...世界大爆炸...生活在别处...',
      text: '<b>星星沉落在海洋中央，一支支歌曲在我心中消亡。</b>——卡尔杜齐《离别》节选...创伤的世界与幻想的江湖...微小至纤维，无垠至宇宙...世界大爆炸...生活在别处...Twenty-eight people were injured in Italy\'s Sicily on Wednesday in an earthquake triggered by the eruption of Mount Etna, Italian authorities said...<br>The inspiration just like a light bulb, always driving us creatively productive. This story comes from 2018...<br>灵感就像电灯泡。故事源于2018年...'
    }, {
      headline: '中国海军非洲之角护航记事之一：10年护航显成效',
      faicon: 'fas fa-newspaper',
      date: '2018-12-16',
      shorttext: '2008年12月26日，中国海军首批护航编队解缆起航，赴亚丁湾、索马里海域执行护航任务。回看过去10年间，中国海军护航亚丁湾的成效已经显现...',
      text: '2008年12月26日，中国海军首批护航编队解缆起航，赴亚丁湾、索马里海域执行护航任务。回看过去10年间，中国海军护航亚丁湾的成效已经显现...2008年12月26日，中国海军首批护航编队解缆起航，赴亚丁湾、索马里海域执行护航任务。回看过去10年间，中国海军护航亚丁湾的成效已经显现...2008年12月26日，中国海军首批护航编队解缆起航，赴亚丁湾、索马里海域执行护航任务。回看过去10年间，中国海军护航亚丁湾的成效已经显现...'
    }, {
      headline: 'China, U.S. may meet in January for trade negotiation',
      faicon: 'far fa-newspaper',
      date: '2018-11-3',
      shorttext: 'The delegations of China and the U.S. have stayed in close communication and have made plans to meet face-to-face in January...',
      text: 'The delegations of China and the U.S. have stayed in close communication and have made plans to meet face-to-face in January...2008年12月26日，中国海军首批护航编队解缆起航，赴亚丁湾、索马里海域执行护航任务。回看过去10年间，中国海军护航亚丁湾的成效已经显现...2008年12月26日，中国海军首批护航编队解缆起航，赴亚丁湾、索马里海域执行护航任务。回看过去10年间，中国海军护航亚丁湾的成效已经显现...2008年12月26日，中国海军首批护航编队解缆起航，赴亚丁湾、索马里海域执行护航任务。回看过去10年间，中国海军护航亚丁湾的成效已经显现...'
    }]
  }

  // set newsid for each news item. the maximum count of news item in each page file should be less than 10000.
  for (var i = 0; i < pageinfoObj.part2data.length; i++) {
    pageinfoObj.part2data[i].newsid = pageid * 10000 + i
    pageinfoObj.part2data[i].link = '/news/read?newsid=' + pageinfoObj.part2data[i].newsid
  }

  return pageinfoObj
}

// read page infomation for index page and return
exports.getPageInfoForIndex = function () {
  var pageObj = this.getPageInfo()

  if (pageObj.part2data.length > 4) {
    pageObj.part2data = pageObj.part2data.slice(0, 4)
  }

  return pageObj
}
