function PrimeMover(arg) {
    var counter = 1;
    while (arg > 0) {
        counter++;
        if (isPrime(counter)) {
            arg--;
        }
    }
    return counter;
}

function isPrime(arg) {
    for (var i = 2; i < arg; i++) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}

var out = PrimeMover(16);
console.log("Should be 53");
console.log(out);
out = PrimeMover(1);
console.log("Should be 2");
console.log(out);
out = PrimeMover(2);
console.log("Should be 3");
console.log(out);
out = PrimeMover(100);
console.log("Should be 541");
console.log(out);

