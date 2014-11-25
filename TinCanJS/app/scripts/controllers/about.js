'use strict';

/**
 * @ngdoc function
 * @name tinCanJsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tinCanJsApp
 */
angular.module('tinCanJsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
