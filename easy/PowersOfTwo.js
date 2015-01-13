function PowersOfTwo(arg) {
    if (arg === 1) {
        return true;
    } else if (arg < 1) {
        return false;
    } return PowersOfTwo(arg / 2);
}

var out = PowersOfTwo(12);
console.log("Should be false");
console.log(out);
out = PowersOfTwo(64);
console.log("Should be true");
console.log(out);
out = PowersOfTwo(256);
console.log("Should be true");
console.log(out);
out = PowersOfTwo(255);
console.log("Should be false");
console.log(out);

