function Trie(value) {
  this.root = new TrieNode(value);
}

function TrieNode(value, name) {
    this.val = value;
    this.name = name || number_names[value];
    this.steps = [];
    this.children = {};
}
var number_names = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    25: "twenty-five",
    50: "fifty",
    75: "seventy-five",
    100: "one-hundred"
}
var operations = {
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    },
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    }
}
Trie.prototype.insert(value){
    var cur = this.root;
    var stems = [];
    while(cur.children){
        stems.push(cur);
        for (var i = 0; i < cur.children.length; i++) {
            var newNode = cur.children[i]
        }
    }
    for (operation in operations){

    }
}
