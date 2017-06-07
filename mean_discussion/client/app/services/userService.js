angular.module('app')
.service('UserService', ['$http',
    function($http){
        this.login = function(user){
            return $http.post('/user/login/', user)
        }
        this.register = function(user){
            return $http.post('/user/', user)
        }
        this.show = function(id){
            return $http.get('/user/' + id)
        }
    }])
