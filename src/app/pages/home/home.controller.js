(function ()
{
    'use strict';

    angular
        .module('iBrowser.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($scope, songsDataService, ngAudio)
    {
      var vm =this;
      vm.query = '';
      vm.results = [];
      vm.shouldShow = true;

        //$scope.$watchCollection('vm.query', function (query) {
        //  vm.shouldShow = true;
        //  if (query) {
        //    vm.shouldShow = false;
        //    vm.inputStyle = {width: '100%'};
        //    vm.searchStyle = {'margin-top': '5px'};
        //    songsDataService.getSongsList().search({query: query, limit: 10}, function (data) {
        //      vm.results = data.results;
        //    });
        //  } else {
        //    vm.inputStyle = {width: '230px'};
        //    vm.searchStyle = {'margin-top': '15%'};
        //    vm.results = [];
        //  }
        //});


      vm.search = function(query){
          vm.shouldShow = false;
          vm.inputStyle = {width: '70%'};
          vm.searchStyle = {'margin-top': '5px'};

          songsDataService.getSongsList().search({query: query, limit: 10}, function (data) {
            vm.results = data.results;
          });

      };

        $scope.loadMore = function() {
          songsDataService.getSongsList().search({ query: vm.query, limit: vm.results.length + 10}, function(data) {
              vm.results = data.results;
          });
          };
    }
})();
