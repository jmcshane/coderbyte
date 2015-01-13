function Palindrome(arg) {
    return removeWhiteSpaceAndSplit(arg).reverse().join("") 
        === removeWhiteSpaceAndSplit(arg).join("");
}

function removeWhiteSpaceAndSplit(str) {
    return str.split(" ").join("").split("");
}
var out = Palindrome("never odd or even");
console.log(out);
