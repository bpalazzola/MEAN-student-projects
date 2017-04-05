var first_variable;
function firstFunct() {
    var first_variable;
    first_variable = "Not anymore!!"
    console.log(first_variable);
}
console.log(first_variable) // result: undefined
first_variable = "Yipee I was the first!"
console.log(first_variable) // result: yipee!



var food;
function eat() {
    var food;
    food = "half-chicken";
    console.log(food) // result: half-chicken
    food = "gone";
    console.log(food) // result: gone
}
food = "Chicken"
eat();
console.log(food); // result: Chicken


var new_word;
function lastFunc() {
    new_word = "old";
}
new_word = "New!";
console.log(new_word); // result: New!
