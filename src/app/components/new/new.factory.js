(function() {
    'use strict';

    angular
        .module('testRokk3rlabs')
        .factory('newsData', newsData);

    /** @ngInject */
    newsData.$inject = ['$http'];
    function newsData($http) {
        return {
            getDataChart : getDataChart
        };
        function getDataChart(){
            return $http({
                method: 'GET',
                url: window.location.origin + '/data/activity-data.json'
            })
                .then(getDataComplete)
                .catch(getDataFailed);

            function getDataComplete(response) {
                console.log(response);
                return response.data;
            }

            function getDataFailed(error) {
                console.error('XHR Failed for getTransacciones.' + error.data);
            }
        };
    }
})();
