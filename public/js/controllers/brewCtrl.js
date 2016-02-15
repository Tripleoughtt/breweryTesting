'use strict';

var app = angular.module('testApp');

app.controller('brewCtrl', function($scope, $state,BrewService) {
  $scope.getRandomBrew = () => {
    BrewService.getBrews().then(
      (res) => {
        $scope.brewData = res.data.data
        console.log(res.data.data)
      },
      (err) => console.log('BrewSnag unsuccessful', err))
    }
    $scope.submitBrewReview = (brewReview) => {
      BrewService.submitBrewReview(brewReview).then((res) => console.log('success'), err => console.log('unsuccessful'))
    }


});
