var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/github_api_callback', function (req, res) {
  console.log(req.body.action)
  res.send('callboak!')
})

app.listen(3000, function () {
  console.log('Webhook server is listening on port 3000!');
})
