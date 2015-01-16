function DistinctList(arg) {

    var contents = [];
    var duplicates = 0;
    var value;
    while ( (value = arg.pop()) !== undefined) {
        if (contents.indexOf(value) > -1) {
            duplicates++;
        } else {
            contents.push(value);
        }
    }
    return duplicates;
}

var out = DistinctList([1,1,2,2,3,3,3]);
console.log("Should be 4");
console.log(out);
out = DistinctList([1,2,4,5,4,5]);
console.log("Should be 2");
console.log(out);
out = DistinctList([0,-2,-2,5,5,5]);
console.log("Should be 3");
console.log(out);
out = DistinctList([100,2,101,4]);
console.log("Should be 0");
console.log(out);

