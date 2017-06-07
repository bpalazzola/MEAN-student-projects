angular.module('app')
.factory('messageFactory', ['$http',
    function($http){
        var factory = {};
        factory.messages = [];
        factory.index = function(callback){
            $http.get('/message/')
            .then(function(response){
                factory.messages = response.data;
                callback(response.data);
            })
            .catch(function(err){
                console.log(err);
            })
        }
        factory.show = function(id, callback){
            $http.get('/message/' + id)
            .then(function(response){
                //factory.messages.push(response.data);
                callback(response.data);
            })
            .catch(function(err){
                console.log(err);
            })
        }
        factory.create = function(message, callback){
            $http.post('/message/', message)
            .then(function(response){
                callback(response.data);
            })
            .catch(function(err){
                callback(err.data.errors);
            })
        }
        return factory;
    }])
