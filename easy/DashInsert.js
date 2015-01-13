function DashInsert(arg) {

    var argStr = arg + "";
    var argArray = argStr.split("");
    var positions = [];
    for (var i = 0; i < argArray.length; i++) {
        if (i !== 0 && isOdd(parseInt(argArray[i])) && isOdd(parseInt(argArray[i - 1]))) {
            positions.push(i);
        }
    }
    var popVal;
    console.log(positions);
    while((popVal = positions.pop())!== undefined) {
        argArray.splice(popVal, 0, '-');
    }
    return argArray.join("");
}

function isOdd(value) {
    return (value % 2 === 1);
}

var out = DashInsert(12345);
console.log("Should be 12345");
console.log(out);
out = DashInsert(112233);
console.log("Should be 1-1223-3");
console.log(out);
out = DashInsert(113355);
console.log("Should be 1-1-3-3-5-5");
console.log(out);
out = DashInsert(123123);
console.log("Should be 123-123");
console.log(out);

