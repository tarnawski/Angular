(function() {
  'use strict';

  angular
    .module('iBrowser')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
