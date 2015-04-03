/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'jQuery' : '../lib/jquery/jquery',
        'jqbootstrap' : '../lib/bootstrap/bootstrap.min',
        'jqm' : '../lib/jquerymobile/jquery.mobile.min',
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/requirejs-domready/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'jQuery' : { exports: '$'},
        'jqbootstrap' :{
            deps: ['jQuery']
        },
        'jqm' :{
            deps: ['jQuery']
        },
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
