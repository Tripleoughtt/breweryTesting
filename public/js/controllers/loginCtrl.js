'use strict';

var app = angular.module('testApp');

app.controller('loginCtrl', function($scope, $state,UserService) {
    $scope.loginUser = (email, password) => {
      UserService.loginUser({email, password}).then((res) => {
        $state.go('home')
        console.log('This was successful', res)
      }, (err) => {console.log('this was unsuccessful', err)});
    }
});
