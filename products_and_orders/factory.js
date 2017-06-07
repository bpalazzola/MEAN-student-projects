angular.module('app')
.factory('productsFactory', [function(){
    var factory = [];
    var products = [{'name':'triple-layer nachos','price':1.00}];
    factory.addProduct = function(product){
        product.quantity = 50;
        products.push(product)
    }
    factory.getProducts = function(callback){
        callback(products);
    }
    factory.deleteProduct = function(index){
        products.splice(index, 1);
    }
    factory.orderProduct = function(index){
        if(products[index].quantity > 0){
            products[index].quantity -= 1;
        }
    }
    return factory;
}])
