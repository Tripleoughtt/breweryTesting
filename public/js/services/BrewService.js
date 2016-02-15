'use strict';

var app = angular.module('testApp');

app.service('BrewService', function($http){
  this.getBrews = () => $http.get('/brews/getRandomBrew');
  this.submitBrewReview = (brewReview) => $http.post('/brews/submitReview', brewReview);
})
