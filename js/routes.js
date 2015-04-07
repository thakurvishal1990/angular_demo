/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */
console.log('in routes');
define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'partials/dashboard.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.when('/landing', {
            templateUrl: 'partials/landing.html',
            controller: 'MyCtrl2'
        });

        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
        $locationProvider.html5Mode(true);
    }]);
});
