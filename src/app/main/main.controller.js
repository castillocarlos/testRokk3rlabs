(function() {
  'use strict';

  angular
    .module('testRokk3rlabs')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state,$rootScope,$scope,$stateParams) {
    var main = this;
    main.hola = 'Mundo';
    main.name = '';

    main.enviar = function () {
      main.hola = main.name;
    }
  }
})();
