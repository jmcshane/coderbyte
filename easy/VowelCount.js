function VowelCount(arg) {
    return arg.split("").filter(matcher).length;
}

function matcher(char) {
    return /[aeiou]/.test(char);
}

var out = VowelCount("Hello world");
console.log(out);
