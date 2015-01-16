function ThreeFiveMultiples(arg) {
    
    var values = [0];
    for (var i = 1; i < arg; i++) {
        if (i % 3 === 0) {
            values.push(i);
        } else if (i % 5 === 0) {
            values.push(i);
        }
    }
    return values.reduce(function(a,b){return a+b});

}

var out = ThreeFiveMultiples(4);
console.log("Should be 3");
console.log(out);
out = ThreeFiveMultiples(6);
console.log("Should be 8");
console.log(out);
out = ThreeFiveMultiples(1);
console.log("Should be 0");
console.log(out);
out = ThreeFiveMultiples(16);
console.log("Should be 60");
console.log(out);

