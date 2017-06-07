angular.module('app')
.factory('orderFactory', ['$http', function($http){
    var factory = {};
    factory.orders = [];
    factory.index = function(callback){
        $http.get('/orders/')
        .then(function(response){
            factory.orders = response.data;
            callback(factory.orders);
        })
        .catch(function(err){
            callback(err.data);
        })

    };
    factory.create = function(order, callback){
        $http.post('/orders/', order)
        .then(function(response){
            factory.orders.push(response.data);
            callback();
        })
        .catch(function(error){
            callback(error.data);
        })
    };
    factory.show = function(id, callback){
        $http.get('/orders/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(err){
            callback(err.data);
        })
    };
    factory.delete = function(id, callback){
        $http.delete('/orders/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(err){
            callback(err.data);
        })
    };
    factory.update = function(id, order, callback){
        $http.put('/orders/' + id, order)
        .then(function(response){
            callback();
        })
        .catch(function(err){
            callback(err.data);
        })
    }
    return factory;
}])
