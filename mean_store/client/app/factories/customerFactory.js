angular.module('app')
.factory('customerFactory', ['$http', function($http){
    var factory = {};
    factory.customers = [];
    factory.index = function(callback){
        $http.get('/customers/')
        .then(function(response){
            factory.customers = response.data;
            callback(factory.customers);
        })
        .catch(function(err){
            callback(err.data);
        })

    };
    factory.create = function(customer, callback){
        $http.post('/customers/', customer)
        .then(function(response){
            factory.customers.push(response.data);
            callback(response.data);
        })
        .catch(function(error){
            callback(error.data);
        })
    };
    factory.show = function(id, callback){
        $http.get('/customers/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(err){
            callback(err.data);
        })
    };
    factory.delete = function(id, callback){
        $http.delete('/customers/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(err){
            callback(err.data);
        })
    };
    factory.update = function(id, customer, callback){
        $http.put('/customers/' + id, customer)
        .then(function(response){
            callback();
        })
        .catch(function(err){
            callback(err.data);
        })
    }
    return factory;
}])
