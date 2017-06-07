angular.module('app')
.controller('productController', ['$scope', 'productFactory', '$routeParams', '$location',
    function($scope, productFactory, $routeParams, $location){
        $scope.products = [];
        $scope.index = function(){
            productFactory.index(function(products){
                $scope.products = products;
            })
        }
        $scope.create = function(product){
            productFactory.create(product, function(err){
                if(err){
                    $scope.errors = err;
                };
                $scope.newProduct = {};
            })
        }
        $scope.delete = function(id){
            productFactory.delete(id, function(err){
                if(err){
                $scope.errors = err;
                };
                $scope.index();
            })
        }
        $scope.update = function(){
            productFactory.update($scope.product._id, $scope.product, function(err){
                if(err){
                    return $scope.errors = err;
                }
                $location.path('/products/' + $scope.product._id);
            })
        }
        $scope.show = function(id){
            productFactory.show($routeParams.id, function(product){
                if(product.errors){
                    return $scope.errors = product.errors;
                }
                $scope.product = product;
            })
        }
    }
]);
