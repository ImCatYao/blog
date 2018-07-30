const express = require('express')
const app = express()

app.all('/', (req, res, next) => {
  res.json("welcome to my site!")
})

var server = app.listen(4400, function() {
  console.log('Listening on port %d', server.address().port);
})