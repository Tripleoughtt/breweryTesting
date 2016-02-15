'use strict';

var app = angular.module('testApp');

app.controller('registerCtrl', function($scope, UserService) {
    $scope.registerUser = (email, password, pass2) => {
      if(password === pass2){
        UserService.registerUser({email, password});
      } else {
        console.log('unsuccessful pass validation')
      }
    }
});
