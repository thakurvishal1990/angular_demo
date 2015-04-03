/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
 console.log('in bootstrap');
define([
    'require',
    'jQuery',
    'jqm',
    'jqbootstrap',
    'angular',
    'app',
    'routes'
], function (require, jQuery, jqm, jqbootstrap, ng) {
    'use strict';
    
    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */

    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
