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
}

var heap = new Heap();
heap.add(5,"fifth priority").add(3,"Third priority").add(1,"First priority").add(100,"hundreth").add(50,"fiftieth");
console.log(heap.table);
