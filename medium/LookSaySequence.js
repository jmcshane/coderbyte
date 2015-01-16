function LookSaySequence(arg) {
    var count = 0;
    var letter;
    return (arg + "").split("")
            .reduce(function(prev, curr, ind, arr) {
                console.log("Previous", "Current",prev, curr);
                if (curr.localeCompare(letter) === 0) {
                    count++;
                    return prev;
                } else {
                    var out = prev;
                    if (letter !== undefined) {
                        out = prev + count + letter;
                        console.log("Wrote", out);
                    }
                    letter = curr;
                    count = 1;
                    return out;
                }
            }, "") + count + letter;
}

var out = LookSaySequence(345);
console.log("Should be 131415");
console.log(out);
out = LookSaySequence(3334412);
console.log("Should be 33241112");
console.log(out);
out = LookSaySequence(11212);
console.log("Should be 21121112");
console.log(out);
out = LookSaySequence(99988888777777);
console.log("Should be 395867");
console.log(out);

