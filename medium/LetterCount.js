function LetterCount(arg) {
    return findFirstLargestInMap(arg.split(" ").map(toCountArray), arg.split(" "));
}

function toCountArray(word) {
    var out = [];
    var letters = [];
    
    word.split("").forEach(function(a) {
       
        var x = letters.indexOf(a);
        console.log(x);
        if (x !== -1) {
            out[x] += 1;
        } else {
            out.push(1);
            letters.push(a);
        }
    });
    
    console.log(out);
    
    return out;
    
}

function findFirstLargestInMap(counts, array) {
    var largest = 1;
    var index = -1;
    for (var i = 0; i < counts.length; i++) {
       var max = Math.max.apply(Math, counts[i]);
        if (max > largest) {
            largest = max;
            index = i;
        }
 
    }
    if (index === -1) {
        return "-1";
    } else {
        return array[index];
    }
}

var out = LetterCount("eee fff gggg");
console.log("Should be gggg");
console.log(out);
out = LetterCount("Sports yahoo sissy");
console.log("Should be sissy");
console.log(out);
out = LetterCount("silly singer sings songs");
console.log("Should be silly");
console.log(out);
out = LetterCount("Elephant orangutan fuzzize");
console.log("Should be fuzzize");
console.log(out);

