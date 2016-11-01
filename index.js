var express = require('express')
var bodyParser = require('body-parser')
var receiver = require('./lib/github_receiver')

var app = express()
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/github_api_callback', function (req, res) {
  var result = receiver.inspect(req.body)
  console.log(result.shouldPublish ? result.payload.title : "bar")
  res.send('callback!')
})

app.listen(3000, function () {
  console.log('Webhook server is listening on port 3000!');
})
