angular.module('app', ['ngRoute','ngCookies'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/_index.html',
        controller: 'userController'
    })
    .otherwise({
        redirectTo: '/'
    })
}])
