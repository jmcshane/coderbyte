function SwapCase(arg) {
    return arg.split("").map(toggleCase).join("");
}

function toggleCase(arg) {
    if (arg === arg.toUpperCase()) {
        return arg.toLowerCase();
    } else {
        return arg.toUpperCase();
    }
}
var out = SwapCase("abc!dE");
console.log("Should be ABC!De");
console.log(out);
out = SwapCase("aaaaa");
console.log("Should be AAAAA");
console.log(out);
out = SwapCase("!,./");
console.log("Should be !,./");
console.log(out);
out = SwapCase("AbcDEF");
console.log("Should be aBCdef");
console.log(out);

