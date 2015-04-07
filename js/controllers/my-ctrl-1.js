define(['jQuery','./module'], function (jQuery,controllers) {
    'use strict';
    /*jQuery.mobile.ajaxEnabled = false;
            jQuery.mobile.linkBindingEnabled = false;
            jQuery.mobile.hashListeningEnabled = false;
            jQuery.mobile.pushStateEnabled = false;*/
    controllers.controller('MyCtrl1', [function ($scope) {
        jQuery('#wrapper').page('destroy').page();
        //jQuery(document).bind("mobileinit", function () {
            
        //})
    }]);
    
    
});
