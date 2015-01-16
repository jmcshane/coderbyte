function NumberSearch(arg) {
    var numbers = 0;
    var letters = 0;
    
    arg.split("").forEach(function(a) {
        if (isNumber(a)) {
            numbers += parseInt(a);
        } else if (isLetter(a)) {
            letters++;
        }
    });
    return Math.round(numbers / letters);
}

function isNumber(a) {
    return /[0-9]/.test(a);
}

function isLetter(a) {
    return /[A-Za-z]/.test(a);
}

var out = NumberSearch("123abc");
console.log("Should be 2");
console.log(out);
out = NumberSearch("ab4eef6.9-1");
console.log("Should be 4");
console.log(out);
out = NumberSearch("1a");
console.log("Should be 1");
console.log(out);
out = NumberSearch("5-5-5-5a");
console.log("Should be 20");
console.log(out);

