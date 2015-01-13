function Consecutive(arg) {
    var max = Math.max.apply(null, arg);
    var min = Math.min.apply(null, arg);
    var total = max - min - 1;
    for (var i = min+1; i < max; i++) {
        if (arg.indexOf(i) > -1) {
            total--;
        }
    }
    return total;
}

var out = Consecutive([5,10,15]);
console.log("Should be 8");
console.log(out);

out = Consecutive([-2,10,4]);
console.log("Should be 10");
console.log(out);

out = Consecutive([1,3]);
console.log("Should be 1");
console.log(out);

out = Consecutive([4,11,5,13]);
console.log("Should be 6");
console.log(out);

out = Consecutive([4,11,5,5,11,13]);
console.log("Should be 6");
console.log(out);