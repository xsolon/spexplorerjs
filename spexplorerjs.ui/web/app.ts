import debug = require('debug');
import express = require('express');
import path = require('path');

import routes from './routes/index';
import users from './routes/user';

var app = express();

console.log(`dirname  : ${__dirname}`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {

  // eslint-disable-next-line no-unused-vars
  app.use((err: any, req, res, _next) => {
    res.status(err['status'] || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// eslint-disable-next-line no-unused-vars
app.use((err: any, req, res, _next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});

// ssl --------------------------------------------------------
var https = require('https');
var fs = require('fs');

var sslOptions = {
  key: fs.readFileSync('web/config/keyDev1.pem'),
  cert: fs.readFileSync('web/config/certDev1.pem'),
  passphrase: 'password'
};

console.log(`opening port: ${__dirname}:` + sslOptions);
var serverSsl = https.createServer(sslOptions, app);
serverSsl.listen(8443);
// -------------------------------------------------------------
