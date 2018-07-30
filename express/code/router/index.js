const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req, res, next) => {
  res.json({
    path: req.path,
    method: req.method
  })
})