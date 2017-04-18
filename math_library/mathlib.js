module.exports = function (){
  return {
    add: function(num1, num2) {
         return num1 + num2;
    },
    multiply: function(num1, num2) {
         return num1 * num2;
    },
    square: function(num) {
         return num * num;
    },
    random: function(num1, num2) {
        if (num1 > num2){
            var greater = num1;
            var lesser = num2;
        }
        else {
            var greater = num2;
            var lesser = num1;
        }
        return lesser + Math.floor((Math.random() * (greater - lesser)));
    }
  }
};
