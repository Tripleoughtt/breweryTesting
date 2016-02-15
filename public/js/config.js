'use strict';

var app = angular.module('testApp');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/html/register.html',
      controller: 'registerCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/html/login.html',
      controller: 'loginCtrl'
    })
    .state('brews', {
      url: '/brews',
      templateUrl: 'html/brews.html',
      controller: 'brewCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
