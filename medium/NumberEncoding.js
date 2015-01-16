function NumberEncoding(arg) {
    return arg.split("").map(getLetterNums).join("");
}

function getLetterNums(a) {
    if (/[a-z]/.test(a)) {
        return a.charCodeAt(0) - 96;
    } else {
        return a;
    }
}
var out = NumberEncoding("hello 45");
console.log("Should be 85121215 45");
console.log(out);
out = NumberEncoding("jaj-a");
console.log("Should be 10110-1");
console.log(out);
out = NumberEncoding("eeffgz");
console.log("Should be 5566726");
console.log(out);
out = NumberEncoding("$%#tuv");
console.log("Should be $%#202122");
console.log(out);

