(function() {
  'use strict';

  angular
    .module('testRokk3rlabs')
    .controller('newController', newController);

  /** @ngInject */
  newController.$inject = ['$state','$rootScope','$scope','$stateParams','newsData', '$interval'];
  function newController($state,$rootScope,$scope,$stateParams, newsData, $interval) {
    var news = this;
    news.dataOriginal={};
    news.series=[];
    news.labels=[];
    news.data=[];
    news.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
    news.options = {
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
    newsData.getDataChart().then(function (data) {
      for(var i =0; i < data.length;i++){
        news.dataOriginal = data;
        news.series.push(data[i].zoneId);
        news.labels.push(data[i].data.speed);
        news.data.push([Math.random(data[i].data.count)*100,Math.random(data[i].data.count)*90,Math.random(data[i].data.count)*80,Math.random(data[i].data.count)*85,Math.random(data[i].data.count)*95]);
        $interval(updateTime,60000);
      }
    });
    function updateTime() {
      news.series=[];
      news.labels=[];
      news.data=[];
      for(var i =0; i < news.dataOriginal.length;i++){
        news.series.push(news.dataOriginal[i].zoneId);
        news.labels.push(news.dataOriginal[i].data.speed);
        news.data.push([Math.random(news.dataOriginal[i].data.count)*100,Math.random(news.dataOriginal[i].data.count)*90,Math.random(news.dataOriginal[i].data.count)*80,Math.random(news.dataOriginal[i].data.count)*85,Math.random(news.dataOriginal[i].data.count)*95]);
      }
    }
  }
})();
