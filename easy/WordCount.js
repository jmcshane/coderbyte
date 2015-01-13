function WordCount(arg) {
    return arg.split(" ").filter(nonempty).length;
}

function nonempty(arg) {
    return arg.length !== 0;
}

var out = WordCount("This is a test");
console.log(out);
