define(['jQuery','./module'], function (jQuery,controllers) {
    'use strict';
   /*  jQuery.mobile.ajaxEnabled = false;
    jQuery.mobile.linkBindingEnabled = false;
    jQuery.mobile.hashListeningEnabled = false;
    jQuery.mobile.pushStateEnabled = false;*/
    
    controllers.controller('MyCtrl2', [function ($scope) {
        jQuery('#wrapper').page('destroy').page();
       // jQuery(document).bind("mobileinit", function () {
            
        //})
        /*jQuery.mobile.ajaxEnabled = false;
            jQuery.mobile.linkBindingEnabled = false; 
            jQuery.mobile.hashListeningEnabled = false; 
            jQuery.mobile.pushStateEnabled = false; 
            jQuery.mobile.changePage.defaults.changeHash = false;*/
            //window.history.back();
    }]);
    
});
