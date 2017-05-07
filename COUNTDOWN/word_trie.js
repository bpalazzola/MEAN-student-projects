var wordList = require('word-list-json')

for (var i = 0; i < wordList.length; i++) {
    if(wordList[i].length > 9){
        wordList.splice(i--, 1);
    }
}

function TrieNode(value) {
  this.val = value;
  this.children = [];
  this.isWord = false;
}

function Trie() {
  this.root = new TrieNode("");
}

Trie.prototype.insert = function(word){
    var curr = this.root,
        exists;

    for (var i = 0; i < word.length; i++) {
      exists = false;

      for (var j = 0; j < curr.children.length; j++) {
        if (curr.children[j].val == word[i]) { // exists
          curr = curr.children[j];
          exists = true;
          break;
        }
      }

      if (!exists) {
        curr.children.push(new TrieNode(word[i]));
        curr = curr.children[curr.children.length-1];
      }
    }
    curr.isWord = true;
    return this;
}

Trie.prototype.childIndex = function(node, char) {
  for (var i = 0; i < node.children.length; i++) {
    if (char === node.children[i].val) {
      return i;
    }
  }
  return -1;
}

Trie.prototype.removeWord = function(word) {
  var curr = this.root,
      stack = [],
      next;

  if(this.search(word)) {

    for (var i = 0; i < word.length; i++) {
      next = this.childIndex(curr, word[i]);
      if (next == -1 ) break;
      stack.push(curr.children[next]);
      curr = curr.children[next];
    }

    while(stack.length > 1 && stack[stack.length-1].children.length === 0) {
      node = stack.pop();
      if (!node.isWord) {
        index = this.childIndex(stack[stack.length-1], node.val);
        stack[stack.length-1].children.splice(index, 1);
      } else { break; }

    }
  }

  return this;
}

Trie.prototype.search = function(word) {
  var curr = this.root,
      next;
  for (var i = 0; i < word.length; i++) {
    next = this.childIndex(curr, word[i]);
    if (next < 0) { return curr.isWord; }
    curr = curr.children[next];
  }
  return curr.isWord;
}

Trie.prototype.rBestWord = function(array){
    var self = this;
    var best_word = "";
    var all_words = [];
    function permute(array, node, stem){
        var node = node || self.root;
        var stem = stem || "";
        for (var i = 0; i < array.length; i++) {
            var next_char = array[i];
            var next_index = self.childIndex(node, next_char);
            if(next_index > -1){
                var remainder = array.slice(0, i) + array.slice(i+1, array.length);
                var new_stem = stem + next_char;
                var next_node = node.children[next_index];
                permute(remainder, next_node, new_stem);
                if(node.isWord){
                    all_words.push(stem);
                    if(stem.length > best_word.length){
                        best_word = stem;
                    }
                }
            }
        }
        if(node.isWord){
            all_words.push(stem);
            if(stem.length > best_word.length){
                best_word = stem;
            }
        }
    }
    permute(array);
    console.log(all_words);
    return best_word;
}

var dictionary = new Trie();
for (var i = 0; i < wordList.length; i++) {
    dictionary.insert(wordList[i]);
}
module.exports = dictionary;
console.log(dictionary.rBestWord(['l','o','e','t','r','u','a','m','s']));
