// --------------------------------------------------------------------------------------------------------------------------------------
//
//  directory and file instruction:
//  /routes/                                  content files storage folder
//  |---[language]/                           [language] value. eg. 'en'/'cn'... indicate the folder is for English/Chinese... content.
//  |   |---template.json                     template/common part content for each page.
//  |   |---index.json                        index page content.
//  |   |---about.json                        about page content.
//  |   |---contact.json                      contact page content.
//  |   |---search.json                       search page content.
//  |   |---product/                          product content folder.
//  |   |   |---product-all.json              product all page content.
//  |   |   |---product-cat-[catgoryid].json  product category list. [catgoryid] is an user-define string. eg. 'hardware','app'...
//  |   |   |---product-item-[productid].json product content. [productid] is an user-define/model number string. eg. 'A01','HM0701'...
//  |   |---service/                          service content folder.
//  |   |   |---service-[serviceid].json      service content. [serviceid] is an user-define string. eg. 'customer','distributor'...
//  |   |---news/                             news content folder.
//  |   |   |---news-list.json                news list.
//  |   |   |---news-details-[newsid].json    news content. [newsid] could be a datetime format number. eg. 20190102, 20190212...
//  |---feedback/                             contact message and subscription info storage folder
//  |   |---message.txt                       save contact message.
//  |   |---subscription.txt                  save subscription info.
//  /public/                                  public content can be used by client side.
//      |---imgs/                             images folder. all images/pictures/videos save in this folder.
//
// -------------------------------------------------------------------------------------------------------------------------------------
var fs = require('fs')
var fsPromises = require('fs').promises
var path = require('path')

const BaseFilePath = path.join(__dirname, '../websitedata')
const FeedbackFilePath = path.join(BaseFilePath, 'feedback')

// read JSON file path and return JSON object
exports.getObjectFromJSONFile = function (entrypoint, type, id) {
  var fpath = getJSONFullFilePath(entrypoint, type, id)

  if (id && id !== undefined) console.log(fpath)
  if (fs.existsSync(fpath)) {
    return JSON.parse(fs.readFileSync(fpath, { encoding: 'utf8' }))
  } else {
    return undefined
  }
}

// async read JSON file path and return JSON object
exports.asyncGetObjectFromJSONFile = async function (entrypoint, type, id) {
  var fpath = getJSONFullFilePath(entrypoint, type, id)

  console.log('Experimental Test: You\'re asynchronously reading data from: ' + fpath)
  if (fs.existsSync(fpath)) {
    var retObjString = await fsPromises.readFile(fpath, { encoding: 'utf8' }).catch((err) => {
      console.log(err)
    })
    return JSON.parse(retObjString)
  } else {
    return undefined
  }
}

// get full JSON file path.
function getJSONFullFilePath (entrypoint, type, id) {
  const jsonFileList = {
    template: '/template.json',
    index: '/index.json',
    about: '/about.json',
    contact: '/contact.json',
    search: '/search.json',
    product_all: '/product/product-all.json',
    product_cat: '/product/product-cat-[id].json',
    product_item: '/product/product-item-[id].json',
    service_id: '/service/service-[id].json',
    news_list: '/news/news-list.json',
    news_details: '/news/news-details-[id].json'
  }

  var retpath = BaseFilePath
  if (entrypoint && entrypoint !== undefined) retpath = path.join(retpath, '/' + entrypoint)
  if (type && type !== undefined) retpath = path.join(retpath, jsonFileList[type])
  if (id && id !== undefined) retpath = retpath.replace(/\[id\]/i, id)

  return retpath
}

// Format date string like '20180203','2018-12-19', '2018/12/19'...
function formatDate2yyyyMMdd (dateobj, speratechar) {
  return dateobj.getFullYear().toString() + speratechar +
         (dateobj.getMonth() >= 9 ? (dateobj.getMonth() + 1).toString() : '0' + (dateobj.getMonth() + 1).toString()) + speratechar +
         (dateobj.getDate() > 9 ? dateobj.getDate().toString() : '0' + dateobj.getDate().toString())
}

// Format time string like '220230','18:12:30'...
function formatDate2hhmmss (dateobj, speratechar) {
  return (dateobj.getHours() > 9 ? dateobj.getHours().toString() : '0' + dateobj.getHours().toString()) + speratechar +
         (dateobj.getMinutes() > 9 ? dateobj.getMinutes().toString() : '0' + dateobj.getMinutes().toString()) + speratechar +
         (dateobj.getSeconds() > 9 ? dateobj.getSeconds().toString() : '0' + dateobj.getSeconds().toString())
}

// Save message to file.
exports.saveMessage = function (message) {
  const dd = new Date()
  fs.appendFile(FeedbackFilePath + '/message.txt',
    formatDate2yyyyMMdd(dd, '/') + ' ' + formatDate2hhmmss(dd, ':') + ', ' + JSON.stringify(message) + '\n',
    (err) => {
      if (err) {
        console.log(err)
      }
    })
}

// Save subscription to file.
exports.saveSubscription = function (subscription) {
  const dd = new Date()
  fs.appendFile(FeedbackFilePath + '/subscription.txt',
    formatDate2yyyyMMdd(dd, '/') + ' ' + formatDate2hhmmss(dd, ':') + ', ' + JSON.stringify(subscription) + '\n',
    (err) => {
      if (err) {
        console.log(err)
      }
    })
}

// Output JSON sample file.
exports.outputSampleJSONFiles = function () {
  var TemplateDataReader = require('./template-data-reader')
  var IndexDataReader = require('./index-data-reader')
  var AboutDataReader = require('./about-data-reader')
  var ContactDataReader = require('./contact-data-reader')
  var SearchDataReader = require('./search-data-reader')
  var ProductDataReader = require('./product-data-reader')
  var ServiceDataReader = require('./service-data-reader')
  var NewsDataReader = require('./news-data-reader')
  var jsonObj, jsonstring, fpath
  var reutrnfilelist = []
  const OutputDemoFilePath = path.join(BaseFilePath, 'demo')

  // ------------------------------------------------------------------------------------
  // output template.json
  jsonObj = TemplateDataReader.getTemplatePageInfo('/')
  // remove auto generated nodes.
  delete jsonObj.datamode
  delete jsonObj.siteinfo.copyright
  for (var i = 0; i <= jsonObj.navmenu.length - 1; i++) {
    delete jsonObj.navmenu[i].active
  }
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/template.json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  // ------------------------------------------------------------------------------------
  // output index.json
  jsonObj = IndexDataReader.getPageInfo()
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/index.json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  // ------------------------------------------------------------------------------------
  // output about.json
  jsonObj = AboutDataReader.getPageInfo()
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/about.json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  // ------------------------------------------------------------------------------------
  // output contact.json
  jsonObj = ContactDataReader.getPageInfo()
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/contact.json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  // ------------------------------------------------------------------------------------
  // output search.json
  jsonObj = SearchDataReader.getPageInfo('#####')
  // remove or fix auto generated nodes.
  jsonObj.part2title = jsonObj.part2title.replace(/"#####"/ig, '')
  delete jsonObj.resulttips
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/search.json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  // ------------------------------------------------------------------------------------
  // output product-all.json / product-cat-[catgoryid].json / product-item-[productid].json
  jsonObj = ProductDataReader.getCategoryPageInfo('category')
  // remove auto generated nodes.
  delete jsonObj.part2data
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/product/product-cat-[catgoryid].json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  jsonObj = ProductDataReader.getAllPageInfo()
  // remove auto generated nodes.
  for (i = 0; i < jsonObj.part2data.length; i++) {
    delete jsonObj.part2data[i].data
  }
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/product/product-all.json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  jsonObj = ProductDataReader.getItemPageInfo('product')
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/product/product-item-[productid].json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  // ------------------------------------------------------------------------------------
  // output service-[serviceid].json
  jsonObj = ServiceDataReader.getPageInfo('customer')
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/service/service-[serviceid].json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  // ------------------------------------------------------------------------------------
  // output news-list.json / news-details-[newsid].json
  jsonObj = NewsDataReader.getNewsListPageInfo(1)
  // remove auto generated nodes.
  delete jsonObj.pageid
  delete jsonObj.maxpage
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/news/news-list.json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  jsonObj = NewsDataReader.getNewsDetailsPageInfo('')
  jsonstring = JSON.stringify(jsonObj, null, 2)
  fpath = OutputDemoFilePath + '/news/news-details-[newsid].json'
  fs.writeFile(fpath, jsonstring, (err) => {
    if (err) console.log(err)
  })
  reutrnfilelist.push(fpath + '<br>')

  return reutrnfilelist
}
