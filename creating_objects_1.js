function vehicleConstructor(name, wheels, passengers){
    var vehicle = {};
    vehicle.name = name;
    vehicle.wheels = wheels;
    vehicle.passengers = passengers;
    vehicle.makeNoise = function(){
        console.log("HONK HONK");
    };
    return vehicle;
}

var bike = vehicleConstructor("bike", 2, 1);
bike.makeNoise = function(){
    console.log("ring ring!");
};
var sedan = vehicleConstructor("sedan", 4, 4);
sedan.makeNoise = function(){
    console.log("Honk Honk!");
}
var bus = vehicleConstructor("bus", 4, 24);
bus.addPassengers = function(passengers){
    this.passengers += passengers;
};

bus.addPassengers(10);
console.log(bus.passengers);
