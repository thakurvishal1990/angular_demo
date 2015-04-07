/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
 console.log('in bootstrap');
 //require(['jQuery','jqm','jqbootstrap'],function(jQuery,jqm,jqbootstrap) {
        define([
    'require',
    'angular',
    'jQuery',
    /*'jqbootstrap',*/
    'jqm',
    'app',
    'routes'
], function (require, ng, jQuery, jqm) {
    'use strict';
    
    
    
    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!'], function (document) {
        
        ng.bootstrap(document, ['app']);
        //require(['jQuery','jqm'],function(jQuery){
            //jQuery = $.noConflict();
            console.log($);
            console.log(jQuery);
            jQuery.mobile.ajaxEnabled = false;
            jQuery.mobile.linkBindingEnabled = false; 
            jQuery.mobile.hashListeningEnabled = false; 
            jQuery.mobile.pushStateEnabled = false; 
            jQuery.mobile.changePage.defaults.changeHash = false;
            
        //});
    });
});
   // })

