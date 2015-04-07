/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'domReady': '../lib/requirejs-domready/domReady',
        'jQuery' : '../lib/jquery/jquery',
        'jqbootstrap' : '../lib/bootstrap/bootstrap.min',
        'jqm' : '../lib/jquerymobile/jquery.mobile.min',
        'angular-sanitize' : '../lib/angular-sanitize/angular-sanitize.min',
        'jquery-mobile-angular-adapter' : '../lib/jquerymobile-angular-adapter/jquery-mobile-angular-adapter-standalone'
        
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
        }/*,
        'angular-sanitize':{
            deps: ['angular']
        },
        'jquery-mobile-angular-adapter':{
            exports: 'jquery-mobile-angular-adapter',
            deps: ['jQuery','jqm','angular','angular-route','angular-sanitize']
        }*/
    },
    
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});

/*var requireQueue = function(modules, callback) {
  function load(queue, results) {
    if (queue.length) {
      require([queue.shift()], function(result) {
        results.push(result);
        load(queue, results);
      });
    } else {
      callback.apply(null, results);
    }
  }

  load(modules, []);
};


requireQueue(['jQuery','jqm','jqbootstrap','bootstrap'],function(jQuery,jqm,jqbootstrap) {
    
})*/

/*function tryHoldReady() {
  if (!tryHoldReady.executed && window.jQuery) {
    window.jQuery.holdReady(true);
    tryHoldReady.executed = true;
  }
}
tryHoldReady();
require.onResourceLoad = tryHoldReady;*/
