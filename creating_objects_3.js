function vehicleConstructor(name, wheels, passengers, speed){
    if(!(this instanceof vehicleConstructor)){
        return new vehicleConstructor(name, wheels, passengers, speed);
    }
    var self = this;
    var distance_travelled = 0;
    var updateDistanceTravelled = function(num){
        self.distance_travelled += num;
    }
    var generateVin = function(){
        var vin = "";
        for(var i = 0; i < 9; i++){
            vin += Math.floor(Math.random() * 9);
        }
        return vin;
    }
    this.vin = generateVin();
    this.speed = speed;
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.move = function(){
        distance_travelled += this.speed;
        this.makeNoise();
        return this;
    };
    this.checkMiles = function(){
        console.log(distance_travelled);
        return this;
    };
}
vehicleConstructor.prototype.makeNoise = function(){
        console.log("HONK HONK");
        return this;
    };

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
bus.move().move().checkMiles();
console.log(bus.vin);
