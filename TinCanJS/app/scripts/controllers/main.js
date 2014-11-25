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
      // 'err' will be null on success
      if (err !== null) {
          trace(err);
          // handle error
          return;
      }
      // $scope.statements = result.statements;
      angular.copy(result,$scope.result);
      // handle success, 'result' is a TinCan.StatementsResult object
      $scope.$apply();
      // trace($scope.result);
    }
  });
});