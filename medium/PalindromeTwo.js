function PalindromeTwo(arg) {
    console.log(removeWhiteSpaceAndSplit(arg).reverse().join(""));
    console.log(removeWhiteSpaceAndSplit(arg).join(""));
    return removeWhiteSpaceAndSplit(arg).reverse().join("") 
        === removeWhiteSpaceAndSplit(arg).join("");
}

function removeWhiteSpaceAndSplit(str) {
    return str.split(" ").join("").split("").filter(nonChar)
        .map(function(a) { return a.toLowerCase()});
}

function nonChar(a) {
    return /[A-Za-z]/.test(a);
    
}
var out = PalindromeTwo("Noel - sees Leon");
console.log("Should be true");
console.log(out);
out = PalindromeTwo("A war at Tarawa!");
console.log("Should be true");
console.log(out);
out = PalindromeTwo("Argument goes here");
console.log("Should be false");
console.log(out);
out = PalindromeTwo("one!!$$(!*e@#n&o");
console.log("Should be true");
console.log(out);

