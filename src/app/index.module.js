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
      'ngAside',
      'angular-storage',

      // App modules
      'iBrowser.home',
      'iBrowser.single',
      'iBrowser.favourities'
    ]);

})();
