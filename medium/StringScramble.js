function StringScramble(arg1, arg2) {
    var array1 = arg1.split("").filter(isLetter).map(lower);
    var array2 = arg2.split("").filter(isLetter).map(lower);
    
    var allPass = true;
    array2.forEach(function(a) {
        console.log(a, array1);
        var x = array1.indexOf(a);
        if (x > -1) {
            array1.splice(x, 1);
        } else {
            allPass =  false;
        }
    });
    return allPass;
}

function isLetter(a) {
    return /[A-Za-z]/.test(a);
}

function lower(a) {
    return a.toLowerCase();
}

var out = StringScramble("abcd", "adc");
console.log("Should be true");
console.log(out);
out = StringScramble("eeefggg", "eeeefg");
console.log("Should be false");
console.log(out);
out = StringScramble("abcdef", "fedcba");
console.log("Should be true");
console.log(out);

