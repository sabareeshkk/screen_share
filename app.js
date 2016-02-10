var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
var path    = require("path");

var app = express();

app.use(express.static(__dirname + '/public'));

var options = {
  key: fs.readFileSync('/etc/apache2/ssl/apache.key'),
  cert: fs.readFileSync('/etc/apache2/ssl/apache.crt')
};

http.createServer(app).listen(8000);
https.createServer(options, app).listen(5000);



app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index1.html'));
});