angular.module('app', ['ngRoute','ngCookies'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/_user_gateway.html',
        controller: 'userController'
    })
    .when('/wall', {
        templateUrl: 'partials/_wall.html',
        controller: 'wallController'
    })
    .otherwise({
        redirectTo: '/'
    })
}])
