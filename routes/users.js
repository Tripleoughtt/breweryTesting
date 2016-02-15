'use strict';

var express = require('express');
var router = express.Router();

router.post('/register', function(req, res) {
  res.render('index');
  //register a user
});

router.post('/login', (req, res) => {
  //Do something cool
})

module.exports = router;
