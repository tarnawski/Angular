(function ()
{
    'use strict';

    angular
        .module('iBrowser.favourities')
        .controller('FavouritiesController', FavouritiesController);

    /** @ngInject */
    function FavouritiesController($scope, store, songsDataService)
    {
      if (store.get('favourites')) {
        var favourites = store.get('favourites');

        songsDataService.getSongInformation().search({id: favourites.toString()}, function (data) {
          var songs = data.results;
          $scope.songs = songs;
        });
      }
    }
})();
