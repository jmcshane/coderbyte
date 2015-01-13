function DashInsertII(arg) {
    var str = DashInsert(arg, '-', isOdd);
    return DashInsert(str, '*', isEven);
}

function DashInsert(arg, char, fun) {

    var argStr = arg + "";
    var argArray = argStr.split("");
    var positions = [];
    for (var i = 0; i < argArray.length; i++) {
        if (i !== 0 && fun(parseInt(argArray[i])) && fun(parseInt(argArray[i - 1]))) {
            positions.push(i);
        }
    }
    var popVal;
    console.log(positions);
    while((popVal = positions.pop())!== undefined) {
        argArray.splice(popVal, 0, char);
    }
    return argArray.join("");
}

function isOdd(value) {
    return (value % 2 === 1);
}

function isEven(value) {
    return (value % 2 === 0);
}

var out = DashInsertII(123);
console.log("Should be 123");
console.log(out);
out = DashInsertII(112233);
console.log("Should be 1-12*23-3");
console.log(out);
out = DashInsertII(1222111);
console.log("Should be 12*2*21-1-1");
console.log(out);
out = DashInsertII(888);
console.log("Should be 8*8*8");
console.log(out);

