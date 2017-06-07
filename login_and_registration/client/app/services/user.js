angular.module('app')
.service('userService', ['$http', function($http){
    this.login = function(user) {
        return $http.post('/auth/login', user);
    };
    this.register = function(user) {
        return $http.post('/auth/register', user);
    }
    this.logout = function(id) {
        return $http.delete('auth/logout/' + id)
    }
}])
