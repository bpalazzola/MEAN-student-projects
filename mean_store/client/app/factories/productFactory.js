angular.module('app')
.factory('productFactory', ['$http', function($http){
    var factory = {};
    factory.products = [];
    factory.index = function(callback){
        $http.get('/products/')
        .then(function(response){
            factory.products = response.data;
            callback(factory.products);
        })
        .catch(function(err){
            callback(err.data);
        })

    };
    factory.create = function(product, callback){
        $http.post('/products/', product)
        .then(function(response){
            factory.products.push(response.data);
            callback(response.data);
        })
        .catch(function(error){
            callback(error.data);
        })
    };
    factory.show = function(id, callback){
        $http.get('/products/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(err){
            callback(err.data);
        })
    };
    factory.delete = function(id, callback){
        $http.delete('/products/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(err){
            callback(err.data);
        })
    };
    factory.update = function(id, product, callback){
        $http.put('/products/' + id, product)
        .then(function(response){
            callback();
        })
        .catch(function(err){
            callback(err.data);
        })
    };
    return factory;
}])
