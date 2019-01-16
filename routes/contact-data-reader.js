// contact page data reader
var FileHandler = require('./file-handler.js')

function getDefaultPageInfo () {
  var defaultPageInfoObj = {
    pagetitle: 'CONTACT US',
    part1visible: 'true',
    part1title: 'CONTACT US',
    part1subtitle: 'WE ARE DELIGHTED TO MEET YOU',
    part1content: 'If you want to know more about us or our products, feel free to contact us or our branch office during work time, or you\'re able to write a message to us in the form below as you wish.',
    part1background: '/imgs/template1-contact-title-bg.jpg',
    part2visible: 'true',
    part2title: 'COMPANY / BRANCH OFFICE',
    part2data: [{
      title: 'China Imagination Inc.',
      lines: [{
        caption: 'ADDRESS:',
        text: '8th Floor, Imagination Building, No 9999, Wangfujing Avenue, Haidian District, Beijing, China'
      }, {
        caption: 'TEL:',
        text: '010-12345688<br>400-100-8888 (Customer Service Free Call)'
      }, {
        caption: 'FAX:',
        text: '010-12345699'
      }, {
        caption: 'EMAIL:',
        text: 'image@unknow.company',
        link: 'mailto:image@unknow.company'
      }, {
        caption: 'WORKTIME:',
        text: 'Mon. - Sat. Local Time 9AM - 7PM'
      }],
      image: '/imgs/address-p1.jpg',
      imagelink: 'http://map.baidu.com/?newmap=1&shareurl=1&l=19&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&c=12959653,4826605&mapShareId=c3c410057b19e457eaf853b4'
    }, {
      title: 'Shanghai Branch Office',
      lines: [{
        caption: 'ADDRESS:',
        text: '18th Floor, Goodwell Building, No 99, Nanjing Road, Huangpu District, Shanghai, China'
      }, {
        caption: 'TEL:',
        text: '021-12345688<br>400-100-8888 (Customer Service Free Call)'
      }, {
        caption: 'FAX:',
        text: '021-12345699'
      }, {
        caption: 'EMAIL:',
        text: 'image.sh@unknow.company',
        link: 'mailto:image.sh@unknow.company'
      }, {
        caption: 'WORKTIME:',
        text: 'Mon. - Sat. Local Time 9AM - 7PM'
      }],
      image: '/imgs/address-p2.jpg',
      imagelink: 'http://map.baidu.com/?newmap=1&shareurl=1&l=16&tn=B_NORMAL_MAP&hb=B_SATELLITE_STREET&c=13525059,3641487&mapShareId=be91cb02ba85655ecae33cb5'
    }, {
      title: 'LA Branch Office',
      lines: [{
        caption: 'ADDRESS:',
        text: 'No 2345, Vitoria St, Los Angeles, California 92999, US'
      }, {
        caption: 'TEL:',
        text: '01-123-456-88'
      }, {
        caption: 'FAX:',
        text: '01-123-456-00'
      }, {
        caption: 'EMAIL:',
        text: 'image.la@unknow.company',
        link: 'mailto:image.la@unknow.company'
      }, {
        caption: 'WORKTIME:',
        text: 'Mon. - Sat. Local Time 10AM - 8PM'
      }, {
        caption: 'WEBSITE:',
        text: '<b>Imagenation US Inc.</b>',
        link: 'http://www.xxxxxxxx.us'
      }],
      image: '/imgs/address-p3.jpg',
      imagelink: 'https://goo.gl/maps/1w32VkVhigD2'
    }, {
      title: 'Tokyo Branch Office',
      lines: [{
        caption: 'ADDRESS:',
        text: 'No 345, Street Sakura, Tokyo, Japan'
      }, {
        caption: 'TEL:',
        text: '0123-456-188'
      }, {
        caption: 'FAX:',
        text: '0123-456-999'
      }, {
        caption: 'EMAIL:',
        text: 'image.jp@unknow.company',
        link: 'mailto:image.jp@unknow.company'
      }, {
        caption: 'WORKTIME:',
        text: 'Mon. - Sat. Local Time 9AM - 9PM'
      }],
      image: '/imgs/address-p4.jpg',
      imagelink: 'https://goo.gl/maps/okGEXLEYbpB2'
    }],
    part3visible: 'true',
    part3title: 'DROP A LINE TO US',
    part3subtitle: '',
    part3content: 'We\'re looking forward to getting your response and ready for answering all your questions.',
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

  return defaultPageInfoObj
}

// read page infomation and return
exports.getPageInfo = function (langid, datamode) {
  var pageinfoObj = getDefaultPageInfo()

  if (datamode === 'file') {
    // read data from JSON file
    var tmpObj = FileHandler.getObjectFromJSONFile(langid, 'contact')
    if (tmpObj && tmpObj !== undefined) pageinfoObj = tmpObj
  }

  return pageinfoObj
}
