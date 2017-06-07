angular.module('app')
.controller('playerController', ['$scope', 'playerFactory',
    function($scope, playerFactory){
        $scope.players = [];
        playerFactory.getPlayers(function(players){
            $scope.players = players;
        });
        $scope.addPlayer = function(){
            playerFactory.addPlayer($scope.player);
            $scope.player = {};
        };
        $scope.deletePlayer = function(index){
            playerFactory.deletePlayer(index);
        }
    }
])
