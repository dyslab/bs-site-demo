// contact page data reader

// read page infomation and return
exports.getPageInfo = function () {
  var pageinfoObj = {
    pagetitle: 'CONTACT US',
    part1title: 'CONTACT US',
    part1subtitle: 'WE ARE DELIGHTED TO MEET YOU',
    part1content: 'If you want to know more about us or our products, feel free to contact us or our branch office during work time, or you\'re able to write a message to us in the form below as you wish.',
    part1background: '/imgs/template1-contact-title-bg.jpg',
    part2title: 'COMPANY / BRANCH OFFICE',
    part2data: [{
      title: 'China Imagination Inc.',
      address: '8th Floor, Imagination Building, No 9999, Wangfujing Avenue, Haidian District, Beijing, China',
      telno: '010-12345688<br>400-100-8888 (Customer Service Free Call)',
      faxno: '010-12345699',
      email: 'image@unknow.company',
      worktime: 'Mon. - Sat. Local Time 9AM - 7PM',
      image: '/imgs/address-p1.jpg',
      imagelink: 'http://map.baidu.com/?newmap=1&shareurl=1&l=19&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&c=12959653,4826605&mapShareId=c3c410057b19e457eaf853b4'
    }, {
      title: 'Shanghai Branch Office',
      address: '8th Floor, Goodwell Building, No 99, Nanjing Road, Huangpu District, Shanghai, China',
      telno: '021-12345688<br>400-100-8888 (Customer Service Free Call)',
      faxno: '021-12345699',
      email: 'image.sh@unknow.company',
      worktime: 'Mon. - Sat. Local Time 9AM - 7PM',
      image: '/imgs/address-p2.jpg',
      imagelink: 'http://map.baidu.com/?newmap=1&shareurl=1&l=16&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&c=13525059,3641487&mapShareId=be91cb02ba85655ecae33cb5'
    }, {
      title: 'LA Branch Office',
      address: 'No 2345, Vitoria St, Los Angeles, California 92999, US',
      telno: '01-123-456-88',
      faxno: '01-123-456-00',
      email: 'image.la@unknow.company',
      worktime: 'Mon. - Sat. Local Time 10AM - 8PM',
      image: '/imgs/address-p3.jpg',
      imagelink: 'https://goo.gl/maps/1w32VkVhigD2'
    }, {
      title: 'Tokyo Branch Office',
      address: 'No 345, Street Sakura, Tokyo, Japan',
      telno: '0123-456-188',
      faxno: '0123-456-199',
      email: 'image.jp@unknow.company',
      worktime: 'Mon. - Sat. Local Time 10AM - 8PM',
      image: '/imgs/address-p4.jpg',
      imagelink: 'https://goo.gl/maps/okGEXLEYbpB2'
    }],
    part3title: 'DROP A LINE TO US',
    part3data: {
      namecaption: 'Your Name',
      nameholder: 'What can we address you',
      emailcaption: 'Your Email',
      emailholder: 'Email Address',
      messagecaption: 'Message',
      messageholder: 'Leave your message here',
      submitcaption: 'SUBMIT',
      responsetitle: 'THANK YOU',
      responsecontent: 'Your message has been submitted to our marketer. We will send you response very soon.',
      responsebuttoncaption: 'CLOSE'
    }
  }

  return pageinfoObj
}
