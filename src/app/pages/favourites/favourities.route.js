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
    url: '/tmp/tmp',
    templateUrl: 'app/pages/favourities/favourities.html',
    controller: 'FavouritiesController',
    controllerAs: 'favourities'
  });
}

})();
