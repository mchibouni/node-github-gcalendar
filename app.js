var github = require('octonode');

var stdio = require('stdio');
var ops = stdio.getopt({
    'username': {key: 'u', args: 1, description: 'Github Username', mandatory: true},
    'password': {key: 'p', args: 1, description: 'Github Password', mandatory: true},
});

var client = github.client({
  username: ops.username,
  password: ops.password
});

var me = client.me();

me.orgs(function (err, body, headers) {
  console.log(body); //json object
})