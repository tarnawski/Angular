(function ()
{
    'use strict';

    angular
        .module('iBrowser.favourities')
        .controller('FavouritiesController', FavouritiesController);

    /** @ngInject */
    function FavouritiesController($scope, store, songsDataService)
    {
      var vm = this;
      if (store.get('favourites')) {
        var favourites = store.get('favourites');

        songsDataService.getSongInformation().search({id: favourites.toString()}, function (data) {
          var songs = data.results;
          vm.songs = songs;
        });
      }

      var drive = function(source, target){
        var t = vm.songs[target];
        var s = vm.songs[source];
        vm.songs[target] = null;
        vm.songs[source] = null;
        vm.songs[target] = s;
        vm.songs[source] = t;

        t = favourites[target];
        favourites[target]=favourites[source];
        favourites[source] = t;

        store.set('favourites', favourites);
    };

      vm.delete = function(index){
        vm.songs.splice(index, 1);
        favourites.splice(index, 1);
        store.set('favourites', favourites);
      };

      vm.up = function(index){
        drive(index, index - 1);
      }

      vm.down = function(index){
        drive(index, index + 1);
      }
    }
})();
