(function ()
{
    'use strict';
    angular
        .module('iBrowser')
        .service('artistDataService', artistDataService);

    artistDataService.$inject = ['$resource', 'CONSTANTS'];

    /** @ngInject */
    function artistDataService($resource, CONSTANTS) {
        var service = {
            getArtist: getArtist
        };

        return service;

        /////////////

        function getArtist() {
            return $resource(CONSTANTS.BASE_URL_LASTFM + '/?artist=:artist',{artist: '@artist'}, {
                search: {
                    method: 'JSONP',
                    params: {
                        callback: 'JSON_CALLBACK',
                        method: 'artist.getInfo',
                        user: CONSTANTS.USER_LASTFM,
                        api_key: CONSTANTS.API_KEY_LASTFM,
                        format: 'json'

                    }
                }
            });
        }
    }
    })();
