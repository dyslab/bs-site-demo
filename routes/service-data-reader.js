// service page data reader

// read page infomation and return
exports.getPageInfo = function (serviceid) {
  var pageinfoObj = {
    pagetitle: 'SERVICES',
    part1visible: 'true',
    part1title: 'SERVICES',
    part1subtitle: 'WE ARE READY FOR SERVING YOU',
    part1content: 'Welcome to the services page, feel free to contact us or our branch office during work time, or you\'re able to write a message to us in the form below as you wish.',
    part1background: '/imgs/template1-service-title-bg.jpg',
    part2visible: 'true',
    part2title: 'CUSTOMER PRIVILEGE',
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
    }, {
      image: '/imgs/template1-service-privilege4.png',
      title: 'Free Shipping',
      content: 'We offer free shipping service for customers. Consult the front counter for further details please.',
      linktext: 'Work time: Mon-Sun. 12:00 - 20:00 GST',
      href: '#'
    }, {
      image: '/imgs/template1-service-privilege5.png',
      title: 'Item Recycling Service',
      content: 'Free collect the recycled items as you wish. Go to the specific channel to take action on it.',
      linktext: '',
      href: '#'
    }, {
      image: '/imgs/template1-service-privilege6.png',
      title: 'Free Callback',
      content: 'Send request and get a call back with no charge. We offer your any information that you need.',
      linktext: 'Send Callback Request NOW >',
      href: '/contact'
    }],
    part3visible: 'true',
    part3title: 'SELF-SERVICE',
    part3data: [{
      image: '/imgs/template1-service-function1.jpg',
      title: 'Upgarde Membership',
      href: '#'
    }, {
      image: '/imgs/template1-service-function2.jpg',
      title: 'Mobile App',
      href: '#'
    }, {
      image: '/imgs/template1-service-function3.jpg',
      title: 'Sociality Link',
      href: '/about'
    }, {
      image: '/imgs/template1-service-function4.jpg',
      title: 'Daily Maintenance',
      href: '#'
    }, {
      image: '/imgs/template1-service-function5.jpg',
      title: 'Price Inquiry',
      href: '/contact'
    }],
    part4visible: 'true',
    part4title: 'F A Q',
    part4data: [{
      faicon: 'fas fa-question-circle',
      title: 'What can we know within the website?',
      content: 'You can get information about our history, news and bunch of amazing products.'
    }, {
      faicon: 'far fa-question-circle',
      title: 'Why did I ask a such stupid question?',
      content: 'You know who you are...You should know that, we would do something stupid sometimes.'
    }, {
      faicon: 'fas fa-question-circle',
      title: 'Would anyone else see my stupid question?',
      content: 'Of course YES. you know we can never cover fire with paper.'
    }, {
      faicon: 'far fa-question-circle',
      title: 'Okay, I admit I am a idiot. But why did you create a such stupid section though?',
      content: 'Ummm...I have to say that, sometimes I am a idiot too.'
    }],
    part5visible: 'true',
    part5title: 'NEED MORE HELP?',
    part5data: [{
      faicon: 'fab fa-weixin',
      title: 'SCAN and JOIN our wechat discussion group',
      popuphref: '/imgs/qrcode-wx-test.png'
    }, {
      faicon: 'fab fa-weibo',
      title: 'SCAN and JOIN our weibo user group',
      popuphref: ''
    }, {
      faicon: 'fab fa-qq',
      title: 'SCAN and JOIN our QQ user group',
      popuphref: '/imgs/qrcode-qq-test.png'
    }, {
      faicon: 'fas fa-phone',
      title: 'Call our C.S.D. hotline directly',
      popuphref: '/imgs/callnow400.jpg'
    }]
  }

  pageinfoObj.part1title = serviceid.toUpperCase() + ' ' + pageinfoObj.part1title

  return pageinfoObj
}