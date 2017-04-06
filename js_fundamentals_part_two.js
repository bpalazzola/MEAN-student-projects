function differenceSigma(x,y){
    var greater;
    var lesser;
    if(x>y){
        greater = x;
        lesser = y;
    } else {
        greater = y;
        lesser = x;
    }
    var sum = 0;
    for(var i = lesser; i < greater; i++){
        sum += i;
    }
    console.log(sum);
}

function minimum(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if(array[i]<min){
            min = array[i];
        }
    }
    return min;
}

function average(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

// as anonymous functions they would look like this:

var average = function(array){
    return true;
}

//as a method they would look like this:

var calculator = {
    average : function(array){
        return "Method version";
    }
}

var person = {
    name : "ryan",
    distance_traveled : 0,
    say_name : function(){
        alert(this.name);
        return this;
    }
    say_something : function(param){
        alert(this.name + " says '" + param + "'");
        return this;
    }
    walk : function(){
        alert(this.name + " is walking");
        this.distance_traveled += 3;
        return this;
    }
    run : function(){
        alert(this.name + " is running");
        this.distance_traveled += 10;
        return this;
    }
    crawl : function(){
        alert(this.name + " is crawling");
        this.distance_traveled += 1;
        return this;
    }
}
