(function ()
{
    'use strict';

    angular
        .module('angular.home')
        .config(routeConfig);

/** @ngInject */
function routeConfig($stateProvider) {
$stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/pages/home/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  });
}

})();
