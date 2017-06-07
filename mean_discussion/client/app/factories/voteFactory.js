angular.module('app')
.factory('voteFactory', ['$http', function($http){
    var factory = {};
    factory.votes = [];
    factory.create = function(vote, callback){
        $http.post('/votes/', vote)
        .then(function(response){
            callback(response);
        })
        .catch(function(response){
            callback();
        })
    }
    return factory;
}])
