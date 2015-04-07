define(['jQuery','./module'], function (jQuery,controllers) {
    'use strict';
    controllers.controller('MyCtrl2', [function ($scope) {
        jQuery('#wrapper').page('destroy').page();
    }]);
    
});
