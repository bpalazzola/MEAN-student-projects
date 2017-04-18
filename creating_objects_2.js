function vehicleConstructor(name, wheels, passengers, speed){
    if(!(this instanceof vehicleConstructor)){
        return new vehicleConstructor(name, wheels, passengers, speed);
    }
    var self = this;
    var distance_travelled = 0;
    var updateDistanceTravelled = function(num){
        self.distance_travelled += num;
    }
    this.speed = speed;
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.makeNoise = function(){
        console.log("HONK HONK");
    };
    this.move = function(){
        distance_travelled += this.speed;
        this.makeNoise();
    };
    this.checkMiles = function(){
        console.log(distance_travelled);
    };
}

var bike = new vehicleConstructor("bike", 2, 1, 10);
bike.makeNoise = function(){
    console.log("ring ring!");
};
var sedan = new vehicleConstructor("sedan", 4, 4, 90);
sedan.makeNoise = function(){
    console.log("Honk Honk!");
}
var bus = new vehicleConstructor("bus", 4, 24, 55);
bus.addPassengers = function(passengers){
    this.passengers += passengers;
};

bus.addPassengers(10);
console.log(bus.passengers);
bus.checkMiles();
bus.move();
bus.checkMiles();
