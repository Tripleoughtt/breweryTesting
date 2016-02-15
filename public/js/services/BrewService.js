'use strict';

var app = angular.module('testApp');

app.service('BrewService', function($http){
  this.getBrews = () => $http.get('/brews/getRandomBrew');
})
