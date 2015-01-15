var express = require('express');
var app = express();

app.get('/config.js', function(request, response) {

  var config = " \
    'use strict'; \
    angular.module('config', []) \
      .constant('config', { \
        'endpoint'    : '" + process.env.ALERTA_ENDPOINT + "', \
        'provider'    : 'google', \
        'client_id'   : '" + process.env.CLIENT_ID + "', \
        'redirect_url': '" + process.env.REDIRECT_URL + "' \
      });";

  response.send(config);
});

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

