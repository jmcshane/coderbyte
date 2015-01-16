function CoinDeterminer(arg) {
    var coins = [11, 9, 7, 5, 1]
    var counter = 0;
    
    coins.forEach(function(a) {
        while (arg -  a >= 0) {
            console.log(a, arg);
            arg -= a;
            counter++;
        }
    });
    
    return counter;

}


var out = CoinDeterminer(37);
console.log("Should be 5");
console.log(out);
out = CoinDeterminer(16);
console.log("Should be 2");
console.log(out);
out = CoinDeterminer(55);
console.log("Should be 5");
console.log(out);
out = CoinDeterminer(59);
console.log("Should be 9");
console.log(out);

