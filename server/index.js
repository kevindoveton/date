var fs = require('fs'),
  http = require('http'),
  https = require('https'),
  path = require('path'),
  express = require('express');

var port = 8000;

var options = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
};

var app = express();

var server = https.createServer(options, app).listen(port, function () {
  console.log("Express server listening on port " + port);
});

app.use(express.static('../public'))

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
  // res.end("hello world\n");
});
