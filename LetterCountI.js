function LetterCountI(arg) {
    var arr = arg.split(" ");
    var longest = 1;
    var retVal = "-1";
    
    arr.forEach(function(word) {
        var value = recursiveCount(word.split(""), 1);
        if (value > longest) {
            longest = value;
            retVal = word;
        }
    });
    return retVal;
}

function recursiveCount(wordArr, longest) {
    if (wordArr.length === 0) {
        return longest;
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
    }
    return recursiveCount(wordArr, longest);
}


var out = LetterCountI("noo worrrdddrrrrrrrdss heerrrreereerrreeeeeeeeeeer");
console.log(out);
