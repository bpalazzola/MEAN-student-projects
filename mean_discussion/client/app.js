angular.module('app', ['ngRoute', 'ngCookies'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/_user_gateway.html',
        controller: 'userController'
    })
    .when('/topics/:id', {
        templateUrl: 'partials/topics/_show.html',
        controller: 'topicController'
    })
    .when('/topics', {
        templateUrl: 'partials/topics/_index.html',
        controller: 'topicController'
    })
    .when('/users/:id', {
        templateUrl: 'partials/users/_show.html',
        controller: 'userController'
    })
    .otherwise({
        redirectTo: '/'
    })
}
])
