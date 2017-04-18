var name_field = document.getElementById('name');
var submit = document.getElementById('submit');

var game = {
  players: [],
  addPlayer: function(name){
      players.push(playerConstructor(name));
  }
};

function playerConstructor(name){
  player = {};
  player.name = name;
    player.hand = [];
  player.addCard = function(card){
    player.hand.push(card);
  };
  return player;
};

function addPlayer(){
    
}
submit.addEventListener('click', addPlayer)
