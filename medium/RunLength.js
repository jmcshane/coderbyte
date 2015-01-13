function RunLength(arg) {
    var count = 0;
    var currIndex = 0;
    return arg.split("").reduce(function(prev, curr, index, array){
        if (!prev) {
            return addCurrent(prev, curr);
        } else if (prev[currIndex + 1] == curr) {
            return prev.slice(0, currIndex)
            + (parseInt(prev[currIndex]) + 1)
            + prev.slice(currIndex + 1);
        } else {
            currIndex += 2;
            return addCurrent(prev, curr);
        }
    }, "");
}

function addCurrent(prev, curr) {
    prev = prev + "1";
    prev = prev + curr;
    return prev;
}

var out = RunLength("aaabbceeeggggggaaaaaa");
console.log(out);
