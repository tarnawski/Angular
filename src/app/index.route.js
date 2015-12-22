(function() {
  'use strict';

  angular
    .module('angular')
    .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider)
    {
        // Default behaviour
        $urlRouterProvider.otherwise('/');
    }

})();
