function AdditivePersistence(arg) {
    if (arg < 10) {
        return 0;
    }
    var argStr = arg + "";
    var array = argStr.split("").map(function(a) {return parseInt(a)});
    var sum = array.reduce(function(a,b){return a + b});
    console.log(sum);
    return AdditivePersistence(sum) + 1;
}


var out = AdditivePersistence(12);
console.log("Should be 1");
console.log(out);
out = AdditivePersistence(1234);
console.log("Should be 2");
console.log(out);
out = AdditivePersistence(777);
console.log("Should be 2");
console.log(out);
out = AdditivePersistence(667);
console.log("Should be 3");
console.log(out);

