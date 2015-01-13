function CaesarCipher(str, num) {
    return str.split("")
        .map(function(a){
            return a.charCodeAt()
        }).map(function(a){
            if (a < 65 || (a > 90 && a < 97) || (a > 122)) {
                return a;
            } else if ((a < 91 && a + num > 90) || (a > 96 && a < 123 && a + num > 122)) {
                return a + num - 26;
            } else if ((a > 96 && a + num < 97) ||(a > 64 && a < 91 && a + num < 65)) {
                return a + num + 26;   
            }else {
                return a + num;
            }
        }).map(function(a){
            return String.fromCharCode(a)
        }).join("");
}

var out = CaesarCipher("E!", -5);
console.log("\nShould be Z!")
console.log(out);


out = CaesarCipher("abc", 0);
console.log("\nShould be abc")
console.log(out);


out = CaesarCipher("K", 9);
console.log("\nShould be T")
console.log(out);

out = CaesarCipher("K!", 9);
console.log("\nShould be T!")
console.log(out);
