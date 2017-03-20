var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var inicio = require("./routes/Inicio");
var usuario = require('./routes/Usuario');
var aplicacion = require("./routes/Aplicacion");
var passport = require('passport');
require('./passport')(passport);


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: "ClaveMuyPrivadaYOcultaMuyDificilYCompleja1234567890"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",inicio);
app.use('/usuario', usuario);
app.use("/aplicacion",aplicacion);

app.get('/facebook', passport.authenticate('facebook',{scope: ["public_profile","email","user_about_me","user_birthday"]}));
app.get('/facebook/listo', passport.authenticate('facebook',
  { successRedirect: '/', 
    failureRedirect: '/usuario' }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
