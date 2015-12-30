(function ()
{
    'use strict';

    angular
        .module('iBrowser.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($scope, songsDataService)
    {
      var vm =this;
      vm.query = '';
      vm.results = [];
      vm.shouldShow = true;
      vm.noResults = false;

      vm.search = function(query){
          vm.shouldShow = false;
          vm.noResults = false;

          vm.searchStyle = {'margin-top': '5px'};
          vm.searchInputStyle = {float: 'left', width: '80%'};
          vm.searchButtonStyle = {'float': 'left', width: '20%'};

          songsDataService.getSongsList().search({query: query, limit: 10}, function (data) {
            vm.results = data.results;
            if (vm.results.length == 0){
              vm.noResults = true;
            }
          });

      };

        $scope.loadMore = function() {
          songsDataService.getSongsList().search({ query: vm.query, limit: vm.results.length + 10}, function(data) {
              vm.results = data.results;
          });
          };



    }
})();
