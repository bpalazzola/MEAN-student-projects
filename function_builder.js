function runningLogger(){
    console.log("I am running!");
}
function multiplyByTen(num){
    num *= 10;
    return num;
}
multiplyByTen(5);

function stringReturnOne(){
    return "First hardcoded string";
}
function stringReturnTwo(){
    return "Second hardcoded string";
}

function caller(value){
    if(typeof(value) == "function"){
        value();
    }
}

function myDoubleConsoleLog(param1, param2){
    if(typeof(param1) == "function" && typeof(param2) == "function"){
        console.log(param1());
        console.log(param2());
    }
}

function caller2(func){
    console.log("starting...");
    setTimeout(function(){
        if(typeof(func) == "function"){
            func();
        }
    }, 2000);
    console.log("ending?")
    return "interesting";
}

myDoubleConsoleLog(caller2, caller2);
