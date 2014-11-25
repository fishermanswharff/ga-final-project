'use strict';

/**
 * @ngdoc function
 * @name tinCanJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tinCanJsApp
 */
angular.module('tinCanJsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
