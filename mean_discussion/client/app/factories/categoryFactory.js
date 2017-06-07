angular.module('app')
.factory('categoryFactory', ['$http', function($http){
    var factory = {};
    factory.categories = [];
    factory.index = function(callback){
        $http.get('/categories/')
        .then(function(response){
            factory.categories = response.data;
            callback(response.data);
        })
        .catch(function(err){
            console.log(err);
        })
    };
    return factory;
}
]);
