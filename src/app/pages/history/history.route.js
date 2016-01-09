(function ()
{
    'use strict';

    angular
        .module('iBrowser.history')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('history', {
    url: '/history',
    templateUrl: 'app/pages/favourites/history.html',
    controller: 'HistoryController',
    controllerAs: 'history'
  });
}

})();
