// read and set cookies module.

// get cookies to a object
exports.getCookies = function (req) {
  var plang = req.cookies.preferred_language
  var tempid = req.cookies['preferred_' + plang + '_templateID']

  return {
    preferred_language: plang,
    preferred_templateID: tempid
  }
}

// set cookie: preferred_language
exports.setPreferredLanguage = function (res, preferredlanguage) {
  if (preferredlanguage && preferredlanguage !== undefined) {
    res.cookie('preferred_language', preferredlanguage, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // cookie life cycle : 15 days
      httpOnly: true
    })
  }
}

// set cookie: preferred_[entrypoint]_templateID
exports.setTemplateID = function (res, entrypoint, templateid) {
  if (entrypoint && entrypoint !== undefined) {
    if (templateid && templateid !== undefined) {
      res.cookie('preferred_' + entrypoint + '_templateID', templateid, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // cookie life cycle : 15 days
        httpOnly: true
      })
    }
  }
}
