(function ()
{
    'use strict';
    angular
        .module('iBrowser')
        .service('songsDataService', songsDataService);

    songsDataService.$inject = ['$resource'];

    /** @ngInject */
    function songsDataService($resource) {
        var service = {
            getSongsList: getSongsList
        };

        return service;

        /////////////

        function getSongsList() {

            return $resource( 'https://itunes.apple.com/search?term=:query&limit=:limit',{query: '@query', limit: '@limit'}, {
                search: {
                    method: 'JSONP',
                    params: {
                        callback: 'JSON_CALLBACK',
                        entity: 'song',
                        sort: 'recent'
                    }
                }
            });

        }
    }
    })();
