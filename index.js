var express = require('express')
var bodyParser = require('body-parser')
var receiver = require('./lib/github_receiver')
var publisher = require('./lib/medium_publisher')

var app = express()
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/github_api_callback', function (req, res) {
  var result = receiver.inspect(req.body)

  if (result.shouldPublish) {
    publisher.publish(result.payload)
  }

  res.send('callback!')
})

app.listen(3000, function () {
  console.log('Webhook server is listening on port 3000!');
})
