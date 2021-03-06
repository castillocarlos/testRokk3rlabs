(function() {
  'use strict';

  angular
  .module('testRokk3rlabs')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          views: {
            "@": {
              templateUrl: 'app/main/main.html',
              controller: 'MainController',
              controllerAs: 'main'
            }
          },
          params: {
          }
        })
        .state('new', {
          url: '/new',
          views: {
            "@": {
              templateUrl: 'app/components/new/new.html',
              controller: 'NewController',
              controllerAs: 'new'
            }
          },
          params: {
          }
        });

    $urlRouterProvider.otherwise('/');
  }

})();
