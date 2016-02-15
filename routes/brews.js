'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');
var jwt = require('jwt-simple');
var User = require('../models/user');

router.get('/getRandomBrew', function(req, res) {
  request('http://api.brewerydb.com/v2/beer/random/?key=58cc2c8307425b435251709b43912aea', (err, response, body) => {
      console.log(body)
      res.send(body)
  })
});

router.post('/submitReview', function(req, res){
  var userInfo = jwt.decode(req.cookies.token, process.env.JWT_SECRET)
  console.log(userInfo)
  User.findByIdAndUpdate(userInfo._id, {$push: {reviews: req.body}}, function(err, saveduser){

  })
})

module.exports = router;
