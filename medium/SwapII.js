function SwapII(arg) {
    var swapped = SwapCase(arg);

    var swapArr = swapped.split("");
    
    var validSwap = false;
    var swapStarted = false;
    var value;
    var holdTemp = [];
    var tempResult = [];
    
    swapArr.forEach(function(a){
        if (isNum(a)) {
            if (swapStarted && validSwap) {
                tempResult.push(a);
                tempResult.push(holdTemp.join(""));
                tempResult.push(value);
                swapStarted = false;
                validSwap = false;
                value = undefined;
                holdTemp = [];
            } else if (swapStarted) {
                tempResult.push(value);
                value = a;
            } else {
                swapStarted = true;
                value = a;
            }
        } else if (isChar(a)) {
            if (swapStarted) {
                validSwap = true;
                holdTemp.push(a);
            } else {
                tempResult.push(a);
            }
        } else {
            if (swapStarted) {
                tempResult.push(value);
                tempResult.push(holdTemp.join(""));
                swapStarted = false;
            }
            tempResult.push(a);
        }
    });
    
    if (value) {
        tempResult.push(value);
        tempResult.push(holdTemp.join(""));
    }
    console.log(tempResult);
    return tempResult.join("");
}

function isNum(a) {
    return /\d/.test(a);
}

function isChar(a) {
    return /[A-Za-z]/.test(a);
}

function SwapCase(arg) {
    return arg.split("").map(toggleCase).join("");
}

function toggleCase(arg) {
    if (arg === arg.toUpperCase()) {
        return arg.toLowerCase();
    } else {
        return arg.toUpperCase();
    }
}



var out = SwapII("123gg))((");
console.log("Should be 2ABC1");
console.log(out);
out = SwapII("121ab5");
console.log("Should be 125AB1");
console.log(out);

out = SwapII("yolO11a");
console.log(out);

