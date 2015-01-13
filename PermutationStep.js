function PermutationStep(arg) {
    var argStr = arg + "";
    var arrArray = argStr.split("");
    var input = [];
    arrArray.forEach(function(a){
        input.push(a);
    });
    var permArr = [],
    usedChars = [];
    
    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length === 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    };
    
    var best;
    
    permute(input).forEach(function(array) {
        var test;
        if ((test = parseInt(array.join(""))) > arg) {
            if (best === undefined) {
                best = test;
            } else if (test < best) {
                best = test;
            }
        }
    });
    if (best === undefined) {
        return -1
    }
    return best;

}

console.log(PermutationStep(123));

console.log(PermutationStep(11121));

console.log(PermutationStep(99999));