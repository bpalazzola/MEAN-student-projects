function personMaker(name){
    var person = {
        name : name,
        distance_traveled : 0,
        say_name : function(){
            alert(this.name);
            return this;
        },
        say_something : function(param){
            alert(this.name + " says '" + param + "'");
            return this;
        },
        walk : function(){
            alert(this.name + " is walking");
            this.distance_traveled += 3;
            return this;
        },
        run : function(){
            alert(this.name + " is running");
            this.distance_traveled += 10;
            return this;
        },
        crawl : function(){
            alert(this.name + " is crawling");
            this.distance_traveled += 1;
            return this;
        },
    };
    return person;
}

function ninjaConstructor(name, cohort){
    var ninja = {
        name: name,
        cohort: cohort,
        belt_level: "yellow",
        levelUp : function(){
            if(this.belt_level == "yellow"){
                this.belt_level = "red";
            } else if(this.belt_level == "red"){
                this.belt_level = "black";
            }
            return this;
        }
    };
    return ninja;
}

var kyle = ninjaConstructor("kyle", "december");
console.log(kyle);
kyle.levelUp().levelUp();
console.log(kyle.belt_level);
