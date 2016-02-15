'use strict';

var app = angular.module('testApp');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })
    .state('register', {
      url: '/register',
      templateUrl: '/html/register.html',
      controller: './controllers/registerCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
