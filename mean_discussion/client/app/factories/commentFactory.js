angular.module('app')
.factory('commentFactory', ['$http', function($http){
    var factory = {};
    factory.comments = [];
    factory.create = function(comment, callback){
        $http.post('/comments/', comment)
        .then(function(response){
            callback(response)
        })
        .catch(function(response){
            callback(response);
        })
    }
    factory.show = function(id, callback){
        $http.get('/comments/' + id)
        .then(function(response){
            callback(response)
        })
        .catch(function(response){
            callback(response);
        })
    }
    return factory;
}
])
