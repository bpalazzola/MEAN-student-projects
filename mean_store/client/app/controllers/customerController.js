angular.module('app')
.controller('customerController', ['$scope', 'customerFactory', '$routeParams', '$location',
    function($scope, customerFactory, $routeParams, $location){
        $scope.customers = [];
        $scope.index = function(){
            customerFactory.index(function(customers){
                $scope.customers = customers;
            })
        }
        $scope.create = function(customer){
            customerFactory.create(customer, function(err){
                if(err){
                    $scope.errors = err;
                };
                $scope.newCustomer = {};
            })
        }
        $scope.delete = function(id){
            customerFactory.delete(id, function(err){
                if(err){
                $scope.errors = err;
                };
                $scope.index();
            })
        }
        $scope.update = function(){
            customerFactory.update($scope.customer._id, $scope.customer, function(err){
                if(err){
                    return $scope.errors = err;
                }
                $location.path('/customers/' + $scope.customer._id);
            })
        }
        $scope.show = function(id){
            customerFactory.show($routeParams.id, function(customer){
                if(customer.errors){
                    return $scope.errors = customer.errors;
                }
                $scope.customer = customer;
            })
        }
    }
]);
