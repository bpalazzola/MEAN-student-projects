angular.module('app')
.controller('newController', ['$scope', 'friendsFactory', '$routeParams',
    function($scope, friendsFactory, $routeParams){
        $scope.friends = [];
        $scope.friend = {};
        $scope.addFriend = function(){
            friendsFactory.create($scope.friend, function(errors){
                if(errors){
                    return $scope.errors = errors;
                }
                $scope.friend = {};
                friendsFactory.index(function(friends){
                    $scope.friends = friends;
                })
            })
        };
        $scope.getFriends = function() {
            friendsFactory.index(function(friends){
                $scope.friends = friends;
            })
        };
        $scope.getFriend = function() {
            friendsFactory.show($routeParams.id, function(friend){
                $scope.friend = friend;
            })
        };
        $scope.update = function() {
            friendsFactory.update($routeParams.id, function(friend){
                $location.path('/friends/' + friend._id )
            })
        };
        $scope.deleteFriend = function(id){
            friendsFactory.delete(id, function(){
                friendsFactory.index(function(friends){
                    $scope.friends = friends;
                })
            })
        };
        $scope.getFriends();
    }
])
