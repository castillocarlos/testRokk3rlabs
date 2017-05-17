(function() {
  'use strict';

  angular
    .module('testRokk3rlabs')
    .controller('MainController', MainController);

  /** @ngInject */
  MainController.$inject = ['$state','$rootScope','$scope','$stateParams','mainData', '$interval'];
  function MainController($state,$rootScope,$scope,$stateParams, mainData, $interval) {
    var main = this;
    main.dataOriginal={};
    main.series=[];
    main.labels=[];
    main.data=[];
    main.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    main.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };
    main.goNews = function () {
      $state.go('new');
    }
    mainData.getDataChart().then(function (data) {
      for(var i =0; i < data.length;i++){
        main.dataOriginal = data;
        main.series.push(data[i].zoneId);
        main.labels.push(data[i].data.speed);
        main.data.push([Math.random(data[i].data.count)*100,Math.random(data[i].data.count)*90,Math.random(data[i].data.count)*80,Math.random(data[i].data.count)*85,Math.random(data[i].data.count)*95]);
        $interval(updateTime,60000);
      }
    });
    function updateTime() {
      main.series=[];
      main.labels=[];
      main.data=[];
      for(var i =0; i < main.dataOriginal.length;i++){
        main.series.push(main.dataOriginal[i].zoneId);
        main.labels.push(main.dataOriginal[i].data.speed);
        main.data.push([Math.random(main.dataOriginal[i].data.count)*100,Math.random(main.dataOriginal[i].data.count)*90,Math.random(main.dataOriginal[i].data.count)*80,Math.random(main.dataOriginal[i].data.count)*85,Math.random(main.dataOriginal[i].data.count)*95]);
      }
    }
  }
})();
