(function() {
  'use strict';

  angular
    .module('testRokk3rlabs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state){
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams, $uibModalInstance){
      })
  }

})();
