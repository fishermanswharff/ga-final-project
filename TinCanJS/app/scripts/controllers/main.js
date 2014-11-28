'use strict';

/**
 * @ngdoc function
 * @name tinCanJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tinCanJsApp
 */
angular.module('MainController').controller('MainCtrl', function($scope,trace,tincan) {

  $scope.result = {};

  tincan.getStatements({
    // 'params' is passed through to TinCan.LRS.queryStatements
    params: {
      since: '2013-08-29',
      limit: 100
    },
    callback: function (err, result) {
      if (err !== null) {
          trace(err);
          return;
      }
      angular.copy(result,$scope.result);
      $scope.$apply();
    }
  });
});