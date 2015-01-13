function MultiplicativePersistence(arg) {
    if (arg < 10) {
        return 0;
    }
    var argStr = arg + "";
    var array = argStr.split("").map(function(a) {return parseInt(a)});
    var sum = array.reduce(function(a,b){return a * b});
    console.log(sum);
    return MultiplicativePersistence(sum) + 1;
}

var out = MultiplicativePersistence(1234);
console.log("Should be 2");
console.log(out);
out = MultiplicativePersistence(12);
console.log("Should be 1");
console.log(out);
out = MultiplicativePersistence(9);
console.log("Should be 0");
console.log(out);
out = MultiplicativePersistence(86);
console.log("Should be 3");
console.log(out);

