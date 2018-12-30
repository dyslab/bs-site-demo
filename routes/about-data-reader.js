// about page data reader

// read page infomation and return
exports.getPageInfo = function () {
  var pageinfoObj = {
    pagetitle: 'ABOUT US',
    part1title: 'ABOUT US',
    part1subtitle: 'OUR MISSIONS',
    part1content: 'This is a web page demo powered by Bootstrap.This is a web page demo powered by Bootstrap.This is a web page demo powered by Bootstrap.This is a web page demo powered by Bootstrap.This is a web page demo powered by Bootstrap.这是一个使用Bootstrap的实践网页。这是一个使用Bootstrap的实践网页。这是一个使用Bootstrap的实践网页。',
    part1background: '/imgs/template1-about-title-bg.jpg',
    part2title: 'THE ICONIC STORIES',
    part2data: [{
      faicon: 'fas fa-lightbulb',
      faicontitle: 'Lightbulb',
      faiconcontent: 'The inspiration just like a light bulb, always driving us creatively productive. This story comes from 2018...<br>灵感就像电灯泡。故事源于2018年...'
    }, {
      faicon: 'fab fa-font-awesome',
      faicontitle: 'Font Awesome',
      faiconcontent: 'Fontawesome helps us stepping upon the stage, able to help you get on the upper hand. Its easy-to-use feature suprised us.<br>FA图标助我们高飞。'

    }, {
      faicon: 'fab fa-weixin',
      faicontitle: 'Tencent Wechat',
      faiconcontent: 'Using by the largest population around the world. Wechat make communication much easier. It\'s the necessary tools in our team.<br>微信提升我们团队的沟通效率。'

    }, {
      faicon: 'fas fa-cube',
      faicontitle: 'Accumulation',
      faiconcontent: 'More and more fails gain more and more successes. Failure is always the fucking mother of success. We made a step forward to success after many failures.<br>成功是由失败积累而成。'

    }, {
      faicon: 'fab fa-alipay',
      faicontitle: 'Alipay',
      faiconcontent: 'Jack Ma\'s quirky contribution: Money is no longer money. When the payment gets to be much easier, the asset is becoming a out-of-control number.<br>支付宝，剁手党，你懂的。'

    }, {
      faicon: 'fab  fa-apple',
      faicontitle: 'Apple',
      faiconcontent: 'The Apple without Steve Jobs is no longer Apple. We are not the Apple fans whereas the creator of Apple is worth to be esteemed.<br>没有了乔布斯的苹果不再是苹果。'
    }],
    part3title: 'HISTORICAL EVENTS',
    part3subtitle: 'TIMELINE',
    part3data: [{
      headline: '2018.12',
      content: 'CCC v3.0 released.CC v3.0 released.CCC v3.0 released.<br>CC v3.0 中文版发布.CCC v3.0 中文版发布.'
    }, {
      headline: '2018.8',
      content: 'CCC v2.0 released.CCC v2.0 released.CCC v2.0 released.CCC v2.0 released.'
    }, {
      headline: '2018.3',
      content: 'CCC get in mind.'
    }, {
      headline: '2017.12',
      content: 'BBB v2.0 released.BBB v2.0 released.BBB v2.0 released.'
    }, {
      headline: '2016.12',
      content: 'BBB v1.0 released.'
    }, {
      headline: '2016.7',
      content: 'AAA v3.0 released. Added Language support. AAA v3.0中文版本推出。'
    }, {
      headline: '2015.11',
      content: 'AAA v2.0 released.AAA v2.0 released.'
    }, {
      headline: '2015.10',
      content: 'AAA v1.0 Beta Test. Team group created.'
    }],
    part4title: 'OUR ELITE TEAM',
    part4subtitle: 'WE ARE READY FOR SERVING YOU',
    part4data: [{
      image: '/imgs/team-p1.jpg',
      headline: 'Kongfu Panda',
      content: 'You know who I am.',
      qqlink: '#',
      email: 'kongfupanda@unknow.company'
    }, {
      image: '/imgs/team-p2.jpg',
      headline: 'Ninja Elder',
      content: 'You know who I am.',
      qqlink: '#',
      email: 'ninjaelder@unknow.company'
    }, {
      image: '/imgs/team-p3.jpg',
      headline: 'Im Celebrity',
      content: 'You know who I am.',
      qqlink: '#',
      email: 'imcelebrity@unknow.company'
    }, {
      image: '/imgs/team-p4.jpg',
      headline: 'A Beauty',
      content: 'You know who I am.',
      qqlink: '#',
      email: 'abeauty@unknow.company'
    }, {
      image: '/imgs/team-p5.jpg',
      headline: 'Military Officer',
      content: 'You know who I am.',
      qqlink: '#',
      email: 'militaryofficer@unknow.company'
    }, {
      image: '/imgs/team-p6.jpg',
      headline: 'A Man',
      content: 'You know who I am.',
      qqlink: '#',
      email: 'aman@unknow.company'
    }],
    part5title: 'TESTIMONIALS',
    part5subtitle: '客户感言',
    part5background: '/imgs/template1-testimonial-bg.jpg',
    part5data: [{
      headline: 'Mrs.Hoorazar',
      prefixsubline: 'comes from',
      subline: 'United State',
      content: 'The items are so good. It made me feel like over the moon. <br>The items are so good. It made me feel like over the moon.<br>The items are so good. It made me feel like over the moon.'
    }, {
      headline: '章小姐',
      prefixsubline: '来自',
      subline: '中国',
      content: '超级棒的鞋子，买一百双都不够。超级棒的鞋子，买一百双都不够。超级棒的鞋子，买一百双都不够。重要的事情说三遍。超级棒的鞋子，买一百双都不够。超级棒的鞋子，买一百双都不够。超级棒的鞋子，买一百双都不够。重要的事情说三遍。'
    }, {
      headline: 'Diana Horwell',
      prefixsubline: 'vient de',
      subline: 'France',
      content: 'De très bonnes chaussures m\'ont rendu heureux. Je vous remercie. De très bonnes chaussures m\'ont rendu heureux. Je vous remercie. De très bonnes chaussures m\'ont rendu heureux. De très bonnes chaussures m\'ont rendu heureux. Je vous remercie.'
    }]
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
