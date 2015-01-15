function BinaryConverter(arg) {
    var i = 0;
    var sum = 0;
    arg.split("").reverse().forEach(function (a) {
       sum += (parseInt(a) << i);
       i++;
    });
    return sum;

}

var out = BinaryConverter("100101");
console.log("Should be 37");
console.log(out);
out = BinaryConverter("011");
console.log("Should be 3");
console.log(out);
out = BinaryConverter("101");
console.log("Should be 5");
console.log(out);
out = BinaryConverter("1101");
console.log("Should be 13");
console.log(out);

