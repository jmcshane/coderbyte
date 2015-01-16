function FibonacciChecker(arg) {
    return getFib(arg, 1, 1) ? "yes" : "no";
}

function getFib(arg, ind1, ind2) {
    console.log(arg, ind1, ind2);
    if (arg < ind1) {
        return false;
    } else if (arg === ind1) {
        return true;
    }
    
    var tmp = ind1 + ind2;
    ind1 = ind2;
    ind2 = tmp;
    return getFib(arg, ind1, ind2);
}

var out = FibonacciChecker(34);
console.log("Should be yes");
console.log(out);
out = FibonacciChecker(54);
console.log("Should be no");
console.log(out);
out = FibonacciChecker(1);
console.log("Should be yes");
console.log(out);
out = FibonacciChecker(0);
console.log("Should be no");
console.log(out);

