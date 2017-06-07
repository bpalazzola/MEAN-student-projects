angular.module('app')
.controller('teamController', ['$scope', 'teamFactory',
    function($scope, teamFactory){
        $scope.getTeams = teamFactory.getTeams(function(teams){
            $scope.teams = teams;
        });
        $scope.addTeam = function(){
            teamFactory.addTeam($scope.team);
            $scope.team = {};
        };
        $scope.deleteTeam = function(index){
            teamFactory.deleteTeam(index);
        }
    }
])
