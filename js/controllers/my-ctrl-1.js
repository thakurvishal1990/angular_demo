define(['jQuery','./module'], function (jQuery,controllers) {
    'use strict';
    
    controllers.controller('MyCtrl1', [function ($scope) {
        jQuery('#wrapper').page('destroy').page();
    }]);
    
    
});
