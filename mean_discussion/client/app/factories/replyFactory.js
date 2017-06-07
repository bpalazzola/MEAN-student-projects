angular.module('app')
.factory('replyFactory', ['$http', function($http){
    var factory = {};
    factory.replies = [];
    factory.create = function(reply, callback){
        $http.post('/replies/', reply)
        .then(function(response){
            callback(response);
        })
        .catch(function(response){
            callback(response);
        })
    }
    factory.show = function(id, callback){
        $http.get('/replies/' + id)
        .then(function(response){
            callback(response)
        })
        .catch(function(response){
            callback(response);
        })
    }
    return factory;
}])
