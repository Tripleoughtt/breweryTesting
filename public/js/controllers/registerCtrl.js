'use strict';

var app = angular.module('testApp');

app.controller('registerCtrl', function($scope, UserService, $state) {
    $scope.registerUser = (email, password, pass2) => {
      if(password === pass2){
        UserService.registerUser({email, password}).success((res) => $state.go('login'));
      } else {
        console.log('unsuccessful pass validation')
      }
    }
});
