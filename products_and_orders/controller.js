angular.module('app')
.controller('productsController', ['$http', '$scope', 'productsFactory',
    function($http, $scope, productsFactory){
        $scope.products = [];
        productsFactory.getProducts(function(products){
            $scope.products = products;
        })
        $scope.deleteProduct = function(index){
            productsFactory.deleteProduct(index);
            productsFactory.getProducts(function(products){
                $scope.products = products;
            })
        }
        $scope.addProduct = function(){
            productsFactory.addProduct($scope.product);
            $scope.product = {};
            
        }
    }
])

angular.module('app')
.controller('orderController', ['$scope', 'productsFactory',
    function($scope, productsFactory){
        $scope.products = [];
        productsFactory.getProducts(function(products){
            $scope.products = products;
        });
        $scope.products.forEach(function(product){
            product.quantity = 50;
        });
        $scope.orderProduct = function(index){
            productsFactory.orderProduct(index);
        }
    }
])
