(function ()
{
    'use strict';

    angular
        .module('iBrowser.favourities')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('favourities', {
    url: '/favourities',
    templateUrl: 'app/pages/favourites/history.html',
    controller: 'FavouritiesController',
    controllerAs: 'favourities'
  });
}

})();
