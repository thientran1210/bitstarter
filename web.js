var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var bf = require('bf');
app.get('/', function(request, response) {
  //response.send('Hello World2!');
    var buff = fs.readFileSync('index.html');
    response.send(bf.toString(buff));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
