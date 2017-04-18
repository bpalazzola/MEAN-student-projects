function fib() {
    var sum = 0;
    var num = 0;
    var last_num = 0;
    function nacci() {
        sum = num + last_num || 1;
        last_num = num;
        num = sum;
        console.log(sum);
        return sum;
    }
    return nacci;
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
