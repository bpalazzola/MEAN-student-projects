angular.module('app')
.controller('dashController', ['$scope', 'orderFactory', 'productFactory', 'customerFactory', '$routeParams', '$location',
    function($scope, orderFactory, productFactory, customerFactory, $routeParams, $location){

        $scope.orders = [];
        $scope.products = [];
        $scope.customers = [];
        $scope.index = function(){
            orderFactory.index(function(orders){
                $scope.orders = orders;
            });
            productFactory.index(function(products){
                $scope.products = products;
            });
            customerFactory.index(function(customers){
                $scope.customers = customers;
            })
        }
    }
]);
