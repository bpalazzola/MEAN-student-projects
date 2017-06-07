angular.module('app')
.factory('teamFactory', [function(){
    var factory = {};
    factory.teams = [];
    factory.getTeams = function(callback){
        callback(factory.teams);
    }
    factory.addTeam = function(team){
        factory.teams.push(team);
    }
    factory.deleteTeam = function(index){
        factory.teams.splice(index, 1);
    }
    return factory;
}])
