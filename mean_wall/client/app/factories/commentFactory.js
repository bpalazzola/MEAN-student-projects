angular.module('app')
.factory('commentFactory', ['$http',
    function($http){
        var factory = {};
        factory.comments = [];
        factory.create = function(comment, callback){
            $http.post('/comment/', comment)
            .then(function(response){
                factory.comments.push(response.data);
                callback(response.data);
            })
            .catch(function(err){
                console.log(err);
            })
        }
        factory.index = function(id, callback){
            $http.get('/comment/message/'+ id)
            .then(function(response){
                factory.comments.push(response.data);
                callback(response.data);
            })
            .catch(function(err){
                console.log(err);
            })
        }
        factory.show = function(id, callback){
            $http.get('/comment/' + id)
            .then(function(response){
                factory.comments.push(response.data);
                callback(response.data);
            })
            .catch(function(err){
                console.log(err);
            })
        }
        return factory;
    }])
