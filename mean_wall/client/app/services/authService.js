angular.module('app')
.service('AuthService', ['$http', '$cookies',
    function($http, $cookies){
        this.isAuthed = function() {
            var expired = $cookies.get('expiration');
            var id = $cookies.get('userID');
            var session = $cookies.get('sessionCookie');

            return expired && id && session && expired > Date.now();
        };
        this.currentUserId = function(){
            return $cookies.get('userID');
        };
        this.currentUsername = function(){
            return $cookies.get('username');
        }
        this.logout = function(){
            return $http.delete('/user/logout/' + $cookies.get('userID'));
        }
    }])
