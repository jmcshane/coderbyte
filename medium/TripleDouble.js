function TripleDouble(arg1, arg2) {
    var triples = getSetsOfLen(arg1, 3);
    var doubles = getSetsOfLen(arg2, 2);
    console.log(triples, doubles);
    var matches = false;
    triples.forEach(function(a) {
        if (doubles.indexOf(a) > -1) {
            matches = true;
        }
    });
    return matches ? 1 : 0;
}

function getSetsOfLen(arg, leng) {
    var str = arg + "";
    var sets = [];
    console.log("input", str);
    var prevVals = [];
    str.split("").forEach(function(val) {
        console.log(val, prevVals, sets);
        if (prevVals.length > 0) {
            if (val === prevVals[0]) {
                prevVals.push(val);
                if (prevVals.length === leng) {
                    sets.push(val);
                    prevVals = [];
                }
            } else {
                prevVals = [];
                prevVals.push(val);
            }
        } else {
            prevVals.push(val);
        }
    });
    return sets;
}

var out = TripleDouble(12333, 12323);
console.log("Should be false");
console.log(out);
out = TripleDouble(999000, 887900);
console.log("Should be true");
console.log(out);
out = TripleDouble(11, 111);
console.log("Should be false");
console.log(out);
out = TripleDouble(163334, 99988776633);
console.log("Should be true");
console.log(out);

