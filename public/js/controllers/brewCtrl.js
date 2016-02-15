'use strict';

var app = angular.module('testApp');

app.controller('brewCtrl', function($scope, $state,BrewService) {
  $scope.getRandomBrew = () => {
    BrewService.getBrews().then(
      (res) => console.log('brewSnag successful', res), 
      (err) => console.log('BrewSnag unsuccessful', err))
    }

});
