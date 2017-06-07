angular.module('app')
.factory('playerFactory', [function(){
    var factory = {};
    factory.players = [];
    factory.getPlayers = function(callback){
        callback(factory.players);
    }
    factory.addPlayer = function(player){
        factory.players.push(player);
    }
    factory.deletePlayer = function(index){
        factory.players.splice(index, 1);
    }
    return factory;
}])
