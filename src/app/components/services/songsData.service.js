(function ()
{
    'use strict';
    angular
        .module('iBrowser')
        .service('songsDataService', songsDataService);

    songsDataService.$inject = ['$resource', 'CONSTANTS'];

    /** @ngInject */
    function songsDataService($resource, CONSTANTS) {
        var service = {
            getSongsList: getSongsList,
            getSongInformation: getSongInformation,
            getSongInAlbum: getSongInAlbum
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

        function getSongInformation() {
            return $resource(CONSTANTS.BASE_URL + '/lookup?id=:id',{id: '@id'}, {
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

        function getSongInAlbum() {
            return $resource(CONSTANTS.BASE_URL + '/lookup?id=:id',{id: '@id'}, {
                search: {
                    method: 'JSONP',
                    params: {
                        callback: 'JSON_CALLBACK',
                        entity: 'song',
                        limit: 10
                    }
                }
            });
        }
    }
    })();
