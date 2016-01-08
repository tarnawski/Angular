(function() {
  'use strict';

  angular
    .module('iBrowser', [
      // Plugins
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ngResource',
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'infinite-scroll',

      // App modules
      'iBrowser.home',
      'iBrowser.single'
    ]);

})();
