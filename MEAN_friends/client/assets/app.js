var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/friends/', {
        templateUrl: 'partials/_index.html',
        controller: 'indexController'
    })
    .when('/friends/new', {
        templateUrl: 'partials/new.html',
        controller : 'newController'
    })
    .when('/friends/edit/:id', {
        templateUrl: 'partials/edit.html',
        controller: 'editController'
    })
    .when('/friends/:id', {
        templateUrl: 'partials/show.html',
        controller: 'showController'
    })
    .otherwise({
        redirectTo: '/'
    })
});
