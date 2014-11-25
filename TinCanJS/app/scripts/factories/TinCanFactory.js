'use strict';
angular.module('MainFactory').factory('TinCanFactory',function($http,trace,tincan){
  /*
  var statements = [];

  var tincan = new TinCan (
  {
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

  var fetch = function(){
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
        angular.copy(result.statements,statements);
        // handle success, 'result' is a TinCan.StatementsResult object
        trace(result);
      }
    });
  };
  
  return {
    statements: statements,
    fetch: fetch,
    tincan: tincan
  };
  
  
  tincan.sendStatement({
    actor: {
      mbox: "mailto:info@tincanapi.com"
    },
    verb: {
      id: "http://adlnet.gov/expapi/verbs/attempted"
    },
    target: {
      id: "http://rusticisoftware.github.com/TinCanJS"
    }
  });
  */
  
});