angular.module('app')
.controller('associationController', ['$scope', 'playerFactory', 'teamFactory',
    function($scope, playerFactory, teamFactory){
        $scope.players = [];
        $scope.teams = [];
        $scope.associations = [];
        playerFactory.getPlayers(function(players){
            $scope.players = players;
        })
        teamFactory.getTeams(function(teams){
            $scope.teams = teams;
        })
        $scope.addAssociation = function(){
            $scope.associations.push({'player':$scope.association.player,'team':$scope.association.team});
        };
        $scope.deleteAssociation = function(index){
            $scope.associations.splice(index, 1);
        }
    }
])
