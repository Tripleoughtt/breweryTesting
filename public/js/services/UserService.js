'use strict';

var app = angular.module('testApp');

app.service('UserService', function($http){
  this.registerUser = (userInfo) => $http.post('/users/register', userInfo);
  this.loginUser = (userInfo) => $http.post('/users/login', userInfo);

});
