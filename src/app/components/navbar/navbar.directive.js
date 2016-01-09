(function() {
  'use strict';

  angular
    .module('iBrowser')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $aside) {
      var vm = this;

      vm.favourites = function(){
          $aside.open({
          templateUrl: 'app/pages/favourites/favourites.html',
          placement: 'left',
          size: 'sm'
        });
      };
      vm.history = function(){
        $aside.open({
          templateUrl: 'app/pages/history/history.html',
          placement: 'left',
          size: 'sm'
        });
      };
    }
  }

})();
