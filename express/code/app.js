const express = require('express')
const app = express()

const indexRouter = require('./router/index')
const usersRouter = require('./router/users')


app.use('/', indexRouter)
app.use('/users', usersRouter)

app.all('/', (req, res, next) => {
  res.json("welcome to my site!")
})

var server = app.listen(4400, function() {
  console.log('Listening on port %d', server.address().port);
})