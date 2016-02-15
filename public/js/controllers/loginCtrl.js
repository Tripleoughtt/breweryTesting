'use strict';

var app = angular.module('testApp');

app.controller('loginCtrl', function($scope, UserService) {
    $scope.loginUser = (email, password) => {
      UserService.loginUser({email, password});
    }
});
