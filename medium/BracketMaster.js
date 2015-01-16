function BracketMaster(arg) {
    var fail = false;
    var count = 0;
    arg.split("").forEach(function(a) {
        if (isStart(a)) {
            console.log("Start");
            count++;
        } else if (isEnd(a)) {
            console.log("End");
            if (count === 0) {
                fail = true;
                console.log("here");
            } else {
                count--;
            }
        }
    });
    console.log(fail, count);
    return fail ? 0 : (count === 0 ? 1 : 0);

}

function isStart(a) {
    return /\(/.test(a);
}

function isEnd(a) {
    return /\)/.test(a);
}

var out = BracketMaster("(coder)(byte))");
console.log("Should be 0");
console.log(out);
out = BracketMaster("(c(oder)) b(yte)");
console.log("Should be 1");
console.log(out);
out = BracketMaster(")(coder)(byte");
console.log("Should be 0");
console.log(out);
out = BracketMaster("stuff(things)(stuff)");
console.log("Should be 1");
console.log(out);

