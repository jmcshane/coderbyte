function FormattedDivision(arg1, arg2) {
    var value = arg1 / arg2;
    
    value = Math.round(value * 10000);
    var str = (value + "").split("");
    while (str.length <= 4) {
        str = str.reverse();
        str.push("0");
        str = str.reverse();
    }
    str.splice(str.length - 4,0,'.');
    var counter = 0;
    for (var i = str.length - 5; i >= 0; i--) {
        console.log(i, counter, str);
        if (counter % 3 === 0 && i !== 0 && counter !== 0) {
            str.splice(i, 0, ",");
        }
        counter++;
    }
    return str.join("");
}

var out = FormattedDivision(5,54);
console.log("Should be 0.6667");
console.log(out);
out = FormattedDivision(5,4);
console.log("Should be 1.2500");
console.log(out);
out = FormattedDivision(100,3);
console.log("Should be 33.3333");
console.log(out);
out = FormattedDivision(1000000,1);
console.log("Should be 1,000,000.0000");
console.log(out);

out = FormattedDivision(100000,1);
console.log("Should be 100,000.0000");
console.log(out);

