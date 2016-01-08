(function() {
  'use strict';

  angular
    .module('iBrowser')
    .config(routeConfig);

    /** @ngInject */
    function routeConfig($urlRouterProvider)
    {
        // Default behaviour
        $urlRouterProvider.otherwise('/');
    }

})();
