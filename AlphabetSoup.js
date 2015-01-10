function AlphabetSoup(str) {
    
    return str.split("")
        .map(toValue)
        .sort(function(a,b) {
            return a-b;
        }).map(toString).join("");
}

function toValue(char) {
    return char.charCodeAt();
}
function toString(val) {
    return String.fromCharCode(val);
}
 
var out = AlphabetSoup("asdf");
console.log(out);