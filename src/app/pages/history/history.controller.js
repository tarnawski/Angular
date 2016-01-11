(function () {
  'use strict';

  angular
    .module('iBrowser.history')
    .controller('HistoryController', HistoryController);

  /** @ngInject */
  function HistoryController($scope, store, songsDataService) {
    var vm = this;
    if (store.get('history')) {
      var history = store.get('history');

      songsDataService.getSongInformation().search({id: history.toString()}, function (data) {
        var songs = data.results;
        vm.songs = songs;
      });
    }

    vm.delete = function (index) {
      vm.songs.splice(index, 1);
      history.splice(index, 1);
      store.set('history', history);
    };

    vm.deleteAll = function () {
      vm.songs = [];
      store.remove('history');
    };
  }
})();
