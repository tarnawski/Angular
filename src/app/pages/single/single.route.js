(function ()
{
    'use strict';

    angular
        .module('iBrowser.single')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('single', {
    url: '/:id',
    templateUrl: 'app/pages/single/single.html',
    controller: 'SingleController',
    controllerAs: 'single'
  });

}

})();
