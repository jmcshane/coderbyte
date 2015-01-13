function SimpleMode(arg) {
    
    
    var retVal = recursiveCount(arg, 1, "invalid");
    if (retVal === "invalid") {
        return -1;
    } else {
        return retVal;
    }
}

function recursiveCount(wordArr, longest, value) {
    if (wordArr.length === 0) {
        return value;
    }
    var tempLongest = 0;
    var char = wordArr[0];
    var index = 0;
    while (index !== -1) {
        wordArr.splice(index, 1);
        tempLongest++;
        index = wordArr.indexOf(char);
    }
    if (tempLongest > longest) {
        longest = tempLongest;
        value = char;
    }
    return recursiveCount(wordArr, longest, value);
}

var out = SimpleMode([1,2]);
console.log(out);
