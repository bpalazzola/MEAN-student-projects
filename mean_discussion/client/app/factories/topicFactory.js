angular.module('app')
.factory('topicFactory', ['$http', function($http){
    var factory = {};
    factory.topics = [];
    factory.index = function(callback){
        $http.get('/topics/')
        .then(function(response){
            factory.topics = response.data;
            callback(response.data);
        })
        .catch(function(err){
            console.log(err);
        })
    }
    factory.show = function(id, callback){
        $http.get('/topics/' + id)
        .then(function(response){
            callback(response.data);
        })
        .catch(function(err){
            console.log(err);
        })
    }
    factory.create = function(topic, callback){
        $http.post('/topics/', topic)
        .then(function(response){
            factory.topics.push(response.data);
            callback();
        })
        .catch(function(err){
            callback(err.data.errors);
        })
    }
    return factory;
}])
