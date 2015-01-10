function PrimeTime(arg) {
    var highest = Math.floor(Math.sqrt(arg))
    var i = 2;
    while (i <= highest) {
        if (arg % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

var out = PrimeTime(23 * 23);
console.log(out);
