var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var usersRouter = require('./routes/users')
var indexRouter = require('./routes/index')
var subscribeRouter = require('./routes/subscribe')
var aboutRouter = require('./routes/about')
var contactRouter = require('./routes/contact')
var newsRouter = require('./routes/news')
var serviceRouter = require('./routes/service')
var productRouter = require('./routes/product')
var searchRouter = require('./routes/search')
var outputjsondemoRouter = require('./routes/output-json-sample')
var switchRouter = require('./routes/switch')

var app = express()

// reset the listener port -> 8000
process.env.PORT = 8000

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/users', usersRouter)
app.use('/', indexRouter)
app.use('/subscribe', subscribeRouter)
app.use('/about', aboutRouter)
app.use('/contact', contactRouter)
app.use('/news', newsRouter)
app.use('/service', serviceRouter)
app.use('/product', productRouter)
app.use('/search', searchRouter)
app.use('/output-json-sample', outputjsondemoRouter)
app.use('/switch', switchRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
