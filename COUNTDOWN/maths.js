
var number_names = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    25: "twenty-five",
    50: "fifty",
    75: "seventy-five",
    100: "one-hundred"
}
var operations = {
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    },
    r_divide : function(x,y){
        return y/ x;
    },
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    r_subtract : function(x,y){
        return y - x;
    }
}
var solutions = [];
function number_solver(num_set, target, running_total, operations_performed){
    running_total = running_total || 0;
    operations_performed = operations_performed || [];
    if(num_set.length < 1){
        return false;
    }
    for (number in num_set){
        for (operation in operations){
            let new_result = operations[operation](num_set[number], running_total);
            if(new_result % 1 == 0 && new_result > 0){
                operations_performed.push(operation + num_set[number] + "and" + running_total);
                if(new_result === target){
                    solutions.push(operations_performed);
                    return operations_performed;
                }
                let new_num_set = num_set.slice(0, number) + num_set.slice(number + 1);
                return number_solver(new_num_set, target, new_result, operations_performed)
            }
        }
    }
}

console.log(number_solver([1,2], 3));
console.log(solutions);
