angular.module('app')
.controller('indexController', ['$scope', 'friendsFactory',
    function($scope, friendsFactory){
        friendsFactory.index(function(friends){
            $scope.friends = friends;
        })
        $scope.delete = function(id){
            friendsFactory.delete(id, function(){
                friendsFactory.index(function(friends){
                    $scope.friends = friends;
                })
            })
        };
    }])
