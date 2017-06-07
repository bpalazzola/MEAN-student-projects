angular.module('app')
.controller('orderController', ['$scope', 'orderFactory', 'productFactory', 'customerFactory', '$routeParams', '$location',
    function($scope, orderFactory, productFactory, customerFactory, $routeParams, $location){

        $scope.orders = [];
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
        $scope.create = function(order){
            orderFactory.create($scope.newOrder, function(err){
                if(err){
                    $scope.errors = err;
                };
                var newProduct = $scope.newOrder._product;
                newProduct.quantity -= $scope.newOrder.quantity;
                productFactory.update($scope.newOrder._product._id, newProduct, function(response){
                    $scope.newOrder = {};
                })
            })
        }
        $scope.delete = function(id){
            orderFactory.delete(id, function(err){
                if(err){
                $scope.errors = err;
                };
                $scope.index();
            })
        }
        $scope.update = function(){
            orderFactory.update($scope.order._id, $scope.order, function(err){
                if(err){
                    return $scope.errors = err;
                }
                $location.path('/orders/' + $scope.order._id);
            })
        }
        $scope.show = function(id){
            orderFactory.show($routeParams.id, function(order){
                if(order.errors){
                    return $scope.errors = order.errors;
                }
                $scope.order = order;
            })
        }
    }
]);
