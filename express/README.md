# express.js

express.js is a nodejs based web framework, it's esay to use and learn. The official guides are here:
- official site:  https://expressjs.com/
- github repo: https://github.com/expressjs/express

<br><br>
## Basic usage
express.js has a starter gennerate, which can help u build a basic application easily. More infomation can be found here. https://expressjs.com/en/starter/generator.html. <br>

Generally, a basic server applicaiton built with express is like following:

```javascript
// import express module
var express = require('express')
var logger = require('morgan')

var app = express();

// set static file path
app.use('/public',express.static(__dirname + '/public'))
// ad logger midleware
app.use(logger())
// set route for '/' path
app.get('/', function(req, res){
  res.send('Hello World');
})
// start the server
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
})
```

