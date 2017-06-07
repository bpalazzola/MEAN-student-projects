angular.module('app')
.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location',
    function($scope, friendsFactory, $routeParams, $location){
        $scope.show = function() {
            friendsFactory.show($routeParams.id, function(friend){
                $scope.friend = friend;
            })
        };
        $scope.show();
        $scope.update = function(id) {
            friendsFactory.update($scope.friend, id, function(friend){
                $location.path('friends/' + friend._id)
            })
        };
    }
])
