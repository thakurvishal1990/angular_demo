/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */
console.log('in routes');
define(['jQuery','./app'], function (jQuery,app) {
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
        console.log('on change');
        console.log($location.path());
        $rootScope.actualLocation = $location.path();
    });
    $rootScope.$on('$locationChangeStart', function(event) {
         console.log('in location start');
         console.log($location.path());
         console.log($rootScope.actualLocation);
         if($location.path() == $rootScope.actualLocation){
        
         //event.stopPropagation();
          event.preventDefault();
         /*$location.href = "https://angular-demo-thakurvishal1990-1.c9.io/";
         $location.path($rootScope.actualLocation);*/
         }
    });
// $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
//         if($rootScope.actualLocation === newLocation) {
//             console.log(newLocation);
//             console.log($rootScope.actualLocation);
//             console.log(oldLocation);
//             alert('Why did you use history back?');
//         }
//     });
});
});
