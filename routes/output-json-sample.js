var express = require('express')
var router = express.Router()

var FileHandler = require('./file-handler.js')

/* POST subscribe page. */
router.get('/', function (req, res, next) {
  var ouputfiles = FileHandler.outputSampleJSONFiles()
  res.send('<p><h3>JSON sample files output list:</h3></p><p>' + ouputfiles.join('\n') +
    '</p><p>Totally <b>' + ouputfiles.length + '</b> files sent.</p>')
})

module.exports = router
