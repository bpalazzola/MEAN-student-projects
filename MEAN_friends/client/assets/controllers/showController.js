angular.module('app')
.controller('showController', ['$scope','friendsFactory', '$routeParams',
    function($scope, friendsFactory, $routeParams){
        $scope.getFriend = function(){
            friendsFactory.show($routeParams.id, function(friend){
                $scope.friend = friend;
            })
        }
        $scope.getFriend();
    }
])
