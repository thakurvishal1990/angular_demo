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
        
    }]).run(function ($rootScope, $location) { //Insert in the function definition the dependencies you need.
    //Do your $on in here, like this:
    $rootScope.$on('$locationChangeSuccess', function() {
        $rootScope.actualLocation = $location.path();
    });    
$rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
        if($rootScope.actualLocation === newLocation) {
            console.log(newLocation);
            console.log($rootScope.actualLocation);
            console.log(oldLocation);
            $location.path(oldLocation);
            //$window.location.href = oldLocation;
            alert('Why did you use history back?');
        }
    });
});
});
