angular.module('app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/_index.html',
        controller: 'dashController'
    })
    .when('/customers', {
        templateUrl: 'partials/customers/_index.html',
        controller: 'customerController'
    })
    .when('/customers/:id', {
        templateUrl: 'partials/customers/_show.html',
        controller: 'customerController'
    })
    .when('/customers/edit/:id', {
        templateUrl: 'partials/customers/_edit.html',
        controller: 'customerController'
    })
    .when('/products', {
        templateUrl: 'partials/products/_index.html',
        controller: 'productController'
    })
    .when('/products/:id', {
        templateUrl: 'partials/products/_show.html',
        controller: 'productController'
    })
    .when('/products/edit/:id', {
        templateUrl: 'partials/products/_edit.html',
        controller: 'productController'
    })
    .when('/orders', {
        templateUrl: 'partials/orders/_index.html',
        controller: 'orderController'
    })
    .when('/order/:id', {
        templateUrl: 'partials/orders/_show.html',
        controller: 'orderController'
    })
    .when('/order/edit/:id', {
        templateUrl: 'partials/orders/_edit.html',
        controller: 'orderController'
    })
    .otherwise({
        redirectTo: '/'
    })
}])
