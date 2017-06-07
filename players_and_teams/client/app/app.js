angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/players', {
        templateUrl: 'partials/_players.html',
        controller: 'playerController'
    })
    .when('/teams', {
        templateUrl: 'partials/_teams.html',
        controller: 'teamController'
    })
    .when('/associations', {
        templateUrl: 'partials/_associations.html',
        controller: 'associationController'
    })
    .otherwise({
        redirectTo:'/'
    })
}])
