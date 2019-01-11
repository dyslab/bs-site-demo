// search page data reader
var NewsDataReader = require('./news-data-reader')
var ProductDataReader = require('./product-data-reader')

const SearchTextSperator = '#|#'

function searchNews (term) {
  var nlpageobj = NewsDataReader.getNewsListInfo(0, true)

  var termreg = new RegExp(term, 'i')
  var returnList = []
  var tmptext, tmpresult
  var spos, tmpterm
  for (var i = 0; i < nlpageobj.part2data.length; i++) {
    tmptext = nlpageobj.part2data[i].headline + SearchTextSperator + nlpageobj.part2data[i].shorttext
    spos = tmptext.search(termreg)
    if (spos >= 0) {
      tmpterm = tmptext.substr(spos, term.length)
      tmpresult = tmptext.replace(termreg, '<span class="custom-search-term">' + tmpterm + '</span>').split(SearchTextSperator)
      returnList.push({
        title: tmpresult[0],
        text: tmpresult[1],
        href: nlpageobj.part2data[i].href
      })
    }
  }

  return returnList
}

function searchProducts (term, categoryid) {
  var plist = ProductDataReader.getCatergoryList(categoryid, 0)

  var termreg = new RegExp(term, 'i')
  var returnList = []
  var tmptext, tmpresult
  var spos, tmpterm
  for (var i = 0; i < plist.length; i++) {
    tmptext = plist[i].title + SearchTextSperator + plist[i].content
    spos = tmptext.search(termreg)
    if (spos >= 0) {
      tmpterm = tmptext.substr(spos, term.length)
      tmpresult = tmptext.replace(termreg, '<span class="custom-search-term">' + tmpterm + '</span>').split(SearchTextSperator)
      returnList.push({
        title: tmpresult[0],
        text: tmpresult[1],
        href: plist[i].href
      })
    }
  }

  return returnList
}

function getSearchResultObj (term, fieldname) {
  var fields = fieldname.split(/\//)

  try {
    if (term && term.length > 0) {
      switch (fields[1]) {
        case 'news':
          return searchNews(term)
        case 'product':
          if (fields[2] === 'category' && (fields[3] && fields[3] !== undefined)) {
            return searchProducts(term, fields[3])
          }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

// read page infomation and return
exports.getPageInfo = function (term) {
  var pageinfoObj = {
    pagetitle: 'SEARCH',
    part1visible: 'true',
    part1title: 'SEARCH RESULTS',
    part1subtitle: 'CHECK OUT BELOW',
    part1content: 'Thank you for being here! Search our products and news as you wish. You\'re able to check out anything here via the links below...',
    part1background: '/imgs/template1-search-title-bg.jpg',
    part2visible: 'true',
    part2title: 'Search Term: ',
    part2data: [],
    searchfields: [ '/product/category/cat1', '/product/category/cat2', '/news' ],
    resultcount: 50, // return results limited count. eg. 0,10,20,30.... 0 means unlimited.
    noresulttext: 'Sorry, there\'s no matched item found.'
  }

  pageinfoObj.part2title += '"' + term + '"'
  for (var i = 0; i < pageinfoObj.searchfields.length; i++) {
    var tmpListObj = getSearchResultObj(term, pageinfoObj.searchfields[i])
    if (tmpListObj && tmpListObj !== undefined) {
      for (var j = 0; j < tmpListObj.length; j++) {
        pageinfoObj.part2data.push(tmpListObj[j])
        if (pageinfoObj.part2data.length >= pageinfoObj.resultcount) break
      }
      if (pageinfoObj.part2data.length >= pageinfoObj.resultcount) break
    }
  }

  return pageinfoObj
}
