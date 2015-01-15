function MultipleBrackets( str ) {
    var counter = 0;
    var stack = [];
    var matching = true;
    str.split("").forEach(function(letter) {
        if (/\[|\(/g.test(letter)) {
            stack.push(letter);
            console.log(stack);
        } else if (/\]|\)/g.test(letter)) {

            if (!(/\(\)|\[\]/.test(stack.pop() + letter))) {
                matching = false;
            }
            counter++;
        }
    });
    if (!matching || stack.length) {
      console.log(0);
        return '0';
    }

    console.log('1 ' + counter);
    return '1 '+ counter;
} 

var out = MultipleBrackets();
console.log("Should be ");
console.log(out);
out = MultipleBrackets();
console.log("Should be ");
console.log(out);
out = MultipleBrackets();
console.log("Should be ");
console.log(out);
out = MultipleBrackets();
console.log("Should be ");
console.log(out);

