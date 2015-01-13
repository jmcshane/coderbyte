function NumberAddition(arg) {
    
    var sum = 0;
    
    var value;
    
    arg.split("").forEach(function(a){
        if (isDigit(a)) {
            if (value === undefined) {
                value = parseInt(a);
            } else {
                value = value * 10 + parseInt(a);
            }
        } else {
            if (value != undefined) {
                sum += value;
                value = undefined;
            }
        }
    });
    if (value !== undefined) {
        sum += value;
    }
    return sum;

}

function isDigit(a) {
    return (/\d/.test(a));
}

var out = NumberAddition("123a3");
console.log("Should be 126");
console.log(out);
out = NumberAddition("aaa12as12");
console.log("Should be 24");
console.log(out);
out = NumberAddition("ab12oaoao!! 4 2");
console.log("Should be 18");
console.log(out);
out = NumberAddition(" 1 2 3 4 ");
console.log("Should be 10");
console.log(out);

