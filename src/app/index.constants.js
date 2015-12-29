/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('iBrowser')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('CONSTANTS', {
       BASE_URL: 'https://itunes.apple.com'
     });
})();
