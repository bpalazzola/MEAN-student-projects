function Heap(){
    this.table = [];
    this.add = function(priority, value){
        this.table.push([priority,value]);
        this.repairUp(this.table.length - 1);
        return this;
    }
    this.parent = function(index){
        return Math.floor((index-1)/2);
    }
    this.repairUp = function(index){
        var parent = this.parent(index);
        while(index != 0 && this.table[index][0] < this.table[parent][0]){
            var temp = this.table[index];
            this.table[index] = this.table[parent];
            this.table[parent] = temp;
            index = parent;
            parent = this.parent(index);
        };
        return this;
    };
    this.swap = function(i,j) {
      [this.table[i], this.table[j]] = [this.table[j], this.table[i]]
    };
    this.repairDown = function(index=0) {
      var lc = (index*2)+1,
          rc = (index*2)+2,
          min;// = Infinity;

      if (this.table[lc]) {
        min = this.table[lc][0];
      }
      if (this.table[rc] && min > this.table[rc][0]) {
        min = this.table[rc][0];
      }
    this.removeMin = function() {
        if(this.table.length) {
          this.swap(0, this.table.length-1);
          var min = this.table.pop();
          this.repairDown(0);
          return min;
        }
        return undefined;
      };
}

var pQ = new Heap();

var vertices = [];
function graphNode (value){
    this.val = value;
    this.connections = [];
}
var origin = new graphNode ('A');
var second = new graphNode ('B');
var third = new graphNode ('C');
var fourth = new graphNode ('D');
function add_connection(node1, node2, weight){
    node1.connections.push([weight, node2]);
}
vertices.push(origin);
vertices.push(second);
vertices.push(third);
vertices.push(fourth);
add_connection(origin, second, 5);
add_connection(origin, third, 3);
add_connection(second, fourth, 1);
add_connection(origin, fourth, 8);
function minSpanTree(graph, node){
    var result = [];
    var visited = [];
    pQ.add(0, node);
    while(pQ.table.length){
        if(!visited[node]){
            for (var i = 0; i < node.connections.length; i++) {
                pQ.add(node.connections[i][0], node.connections[i][1]);
            }
        }
    }


}
console.log(minSpanTree(vertices, origin));
