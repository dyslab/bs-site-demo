// read and set cookies module.

exports.getCookies = function (req) {
  return { preferred_language: req.cookies.preferred_language }
}

exports.setPreferredLanguage = function (res, preferredlanguage) {
  if (preferredlanguage && preferredlanguage !== undefined) {
    res.cookie('preferred_language', preferredlanguage, {
      maxAge: 15 * 24 * 60 * 60 * 1000, // cookie life cycle : 15 days
      httpOnly: true
    })
  }
}
