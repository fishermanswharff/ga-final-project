'use strict';
angular.module('TinCanJS',[]).factory('tincan',function($window){
  $window.thirdParty = $window.thirdParty || {};
  if($window.tincan){
    $window.thirdParty.tincan = $window.tincan;
    try { delete $window.tincan; } catch(e) { $window.tincan = undefined; }
  }
  
  var tincan = $window.thirdParty.tincan;
  tincan = new TinCan({
    recordStores: 
    [
      {
        endpoint: 'https://cloud.scorm.com/tc/public/',
        username: 'fishermanswharff@mac.com',
        password: 'Rolla@1878',
        allowFail: false
      }
    ]
  });
  return tincan;
});