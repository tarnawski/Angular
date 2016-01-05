(function ()
{
    'use strict';
    angular
        .module('iBrowser')
        .service('songsDataService', songsDataService);

    /** @ngInject */
    function songsDataService($resource, CONSTANTS) {
        var service = {
            getSongsList: getSongsList
        };

        return service;

        /////////////

        function getSongsList() {
            return $resource(CONSTANTS.BASE_URL + '/search?term=:query&limit=:limit',{query: '@query', limit: '@limit'}, {
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
