/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('iBrowser')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('CONSTANTS', {
       BASE_URL: 'https://itunes.apple.com',
      //  LAST FM
       BASE_URL_LASTFM: 'http://ws.audioscrobbler.com/2.0',
       USER_LASTFM: 'iBrowser',
       API_KEY_LASTFM: 'f8e903b297abd742254a381d552608aa'
     });
})();
