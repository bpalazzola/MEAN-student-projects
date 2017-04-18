var _ = {
   map: function(arr, callback) {
       for (var i = 0; i < arr.length; i++) {
           arr[i] = callback(arr[i]);
       }
       return arr;
   },
   reduce: function(arr, callback, memo) {
     var index = 0;
     if(!memo){index = 1}
     memo = memo || arr[0];
     for (var i = index; i < arr.length; i++) {
         memo = callback(memo, arr[i]);
     }
     return memo;
   },
   find: function(arr, callback) {
     for (var i = 0; i < arr.length; i++) {
         if(callback(arr[i]) === true){
             return arr[i];
         }
     }
   },
   filter: function(arr, callback) {
     var result = [];
     for (var i = 0; i < arr.length; i++) {
         if(callback(arr[i]) === true){
             result.push(arr[i]);
         }
     }
     return result;
   },
   reject: function(arr, callback) {
       var result = [];
       for (var i = 0; i < arr.length; i++) {
           if(callback(arr[i]) === false){
               result.push(arr[i]);
           }
       }
       return result;
   }
 }
// you just created a library with 5 methods!
var test = [1,2,3];
function testCall(num){
    return num * 3;
}
function summer(num1, num2){
    return num1 + num2;
}
function evenTest(num){
    return num % 2 === 0;
}
console.log(_.map(test, testCall));
console.log(_.reduce(test, summer, 10));
console.log(_.find(test, evenTest));
console.log(_.filter(test, evenTest));
console.log(_.reject(test, evenTest));
