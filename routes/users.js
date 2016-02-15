'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.post('/register', function(req, res) {
  //register a user
  User.register(req.body, (err, user) => {
    if(err) return res.status(400).send(err);
    res.status(200).send('Registration Successful')
  })
  console.log('hello registration', req.body)
});

router.post('/login', (req, res) => {
  //Do something cool
  console.log(req.body);
})

module.exports = router;
