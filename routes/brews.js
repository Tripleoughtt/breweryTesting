'use strict';

var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/getRandomBrew', function(req, res) {
  request('http://api.brewerydb.com/v2/beer/random/?key=58cc2c8307425b435251709b43912aea', (err, response, body) => {
      console.log(body)
      res.send(body)
  })
});

module.exports = router;
