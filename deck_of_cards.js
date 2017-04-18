var Deck = function(){
    var self = this;
    var initial_deck = function(){
        var cards = [];
        for(var i = 0; i < 53; i++){
            cards.push(Math.floor(Math.random() * 13) + 2);
        };
        return cards;
    };
    this.cards = initial_deck();
    this.deal = function(){
        return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1);
    };
    this.shuffle = function(){
        for (var i = 0; i < this.cards.length; i++) {
            var j = Math.floor(Math.random() * i);
            var temp = this.cards[j];
            this.cards[j] = this.cards[i];
            this.cards[i] = temp;
        };
        return this;
    }
};

var deck = new Deck();

var Player = function(){
    this.hand = [];
    this.draw = function(){
        this.hand.push(deck.deal());
        return this;
    };
    this.discard = function(index){
        this.hand.splice(index, 1);
        return this;
    };
    this.draw().draw();
};
var ron_rivera = new Player();
console.log(ron_rivera.hand);
ron_rivera.discard(1).draw();
console.log(ron_rivera.hand);
