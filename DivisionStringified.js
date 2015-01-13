function DivisionStringified(num1, num2) {
    var num3 = num1 / num2;
    num3 = Math.round(num3);
    
    var stringified = num3 + "";
    var array = stringified.split("").reverse();
    console.log("Reversed array ", array)
    var added = 0;
    for (var i = 0; i < stringified.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            array.splice(i + added, 0, ",");
            added++;
        }
    }
    return array.reverse().join("");
}

var out = DivisionStringified(7,3);
console.log("Should be 2");

console.log(out);

out = DivisionStringified(1000,1);
console.log("Should be 1,000");
console.log(out);

out = DivisionStringified(1000000, 1);
console.log("Should be 1,000,000");
console.log(out);

out = DivisionStringified(11,2);
console.log("Should be 6");
console.log(out);

