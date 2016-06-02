var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('es6-promise').polyfill();
require('isomorphic-fetch');
var access_token = process.env.ACCESS_TOKEN
var github_owner = process.env.GITHUB_OWNER
var github_repo = process.env.GITHUB_REPO
var default_assignee = process.env.DEFAULT_ASSIGNEE
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.status(200).end();
});

app.post('/', function (req, res) {
  fetch('https://api.github.com/repos/' + github_owner + '/' + github_repo + '/issues?access_token=' + access_token, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: req.body.title,
      body: req.body.body,
      assignee: default_assignee
    })
  }).then(function(response) {
    res.status(200).end();
  }, function(response) {
    res.status(500).end()
  }).catch(function () {
    res.status(500).end()
  })
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});
