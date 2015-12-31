(function ()
{
    'use strict';

    angular
        .module('iBrowser.single')
        .controller('SingleController', SingleController);

    /** @ngInject */
    function SingleController($scope, $stateParams, songsDataService, artistDataService, ngAudio, store)
    {
      var vm = this;

      vm.add = function(){

        var favourites;
        if(store.get('favourites')) {
          favourites = store.get('favourites');
        }
        if(!favourites) {
          store.set('favourites', [$stateParams.id]);

        }else{
          if(vm.checkUnique($stateParams.id)) {
            favourites.push($stateParams.id);
            store.set('favourites', favourites);
          }
        }
      };

      vm.checkUnique = function(value){
        for(var i=0; i<store.get('favourites').length; i++){
          if(store.get('favourites')[i] == value) return false;
        }
        return true;
      };

        var otherInAlbum;
        songsDataService.getSongInformation().search({ id: $stateParams.id}, function(data) {
          data.results[0]['oryginalImage'] = data.results[0].artworkUrl100.replace("100x100", "400x400");
          data.results[0]['audio'] = ngAudio.load(data.results[0].previewUrl);
          data.results[0]['inFavorite'] = !vm.checkUnique($stateParams.id);

          otherInAlbum = songsDataService.getSongInAlbum().search({ id: data.results[0].artistId}, function(data) {
            var tmp = data.results;
            return tmp;
          });

         data.results[0]['otherInAlbum'] = otherInAlbum;
         $scope.song = data.results[0];

         artistDataService.getArtist().search({ artist: data.results[0].artistName}, function(data) {
           if (data.error != 6){
           $scope.artistDescription = data.artist.bio.summary;
         }
         });

        });

    }
})();
