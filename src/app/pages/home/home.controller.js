(function ()
{
    'use strict';

    angular
        .module('iBrowser.home')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($scope, songsDataService, ngAudio)
    {
        $scope.query = '';
        $scope.$watchCollection('query', function() {
          $scope.shouldShow =  true;
            if ($scope.query.length > 0 ) {
                $scope.shouldShow =  false;
                $scope.inputStyle={width: '100%'};
                $scope.searchStyle={'margin-top': '5px'};
                songsDataService.getSongsList().search({ query: $scope.query, limit: 10}, function(data) {
                    $scope.results = data.results;
                });
            } else {
                $scope.inputStyle={width: '230px'}
                $scope.searchStyle={'margin-top': '15%'};
                $scope.results = [];
            }
        });

        $scope.loadMore = function() {
          songsDataService.getSongsList().search({ query: $scope.query, limit: $scope.results.length + 10}, function(data) {
              $scope.results = data.results;
          });
          };



    }
})();
