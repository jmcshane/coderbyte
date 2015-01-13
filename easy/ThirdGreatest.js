function ThirdGreatest(arg) {
    
    var lengths = arg.map(function(a){return a.length});
    
    var output = removeLargest(arg, lengths);
    output = removeLargest(output[0], output[1]);
    
    var max = Math.max.apply(null, output[1]);
    console.log(max, output[1], output[0]);
    for (var i = output[0].length - 1; i >=0; i--) {
        if (output[1][i] === max) {
            return output[0][i];
        }
    }
}

function removeLargest(words, lengths) {
    var max = Math.max.apply(null, lengths);
    words.splice(lengths.indexOf(max), 1);
    lengths.splice(lengths.indexOf(max), 1);
    console.log(words, lengths);
    return [words, lengths];
}

var out = ThirdGreatest([ "coder","byte","code"]);
console.log("Should be code");
console.log(out);
out = ThirdGreatest(["abc","defg","z","hijk"]);
console.log("Should be abc");
console.log(out);
out = ThirdGreatest(["one","two","ent","three"]);
console.log("Should be ent");
console.log(out);

