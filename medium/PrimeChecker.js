function PrimeChecker(arg) {

    var argStr = arg + "";
    var arrArray = argStr.split("");
    var input = [];
    arrArray.forEach(function(a){
        input.push(a);
    });
    var permArr = [],
    usedChars = [];
    
    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length === 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    };
    
    return permute(input).some(function(a) {
        return isPrime(parseInt(a.join("")));
    }) ? 1 : 0;
}

function isPrime(val) {
    if (val === 1) {
        return false;
    }
    var max = Math.floor(Math.sqrt(val));
    for (var i = 2; i <= max; i++) {
        if (val % i === 0) {
            console.log(val, i);
            return false;
        }
    }
    return true;
}

var out = PrimeChecker(23);
console.log("Should be 1");
console.log(out);
out = PrimeChecker(230);
console.log("Should be 1");
console.log(out);
out = PrimeChecker(2300);
console.log("Should be 1");
console.log(out);
out = PrimeChecker(666);
console.log("Should be 0");
console.log(out);

