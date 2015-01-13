function MeanMode(arg) {
    
    var mean = arg.reduce(function(a,b) {return a + b}) / arg.length;
    var index;
    var mapping = [[],[]];
    arg.forEach(function(a) {
        
        if((index =mapping[0].indexOf(a)) > -1) {
            mapping[1][index] += 1;
        } else {
            mapping[0].push(a);
            mapping[1].push(1);
        }
    });
    
    var max;
    var equaled = false;
    mapping[1].forEach(function(a) {
        if (max === undefined || a > max) {
            max = a;
            equaled = false;
        } else if (max === a) {
            equaled = true;
        }
    });
    return (!equaled && mean === mapping[0][mapping[1].indexOf(max)]) ? 1 : 0;
}

var out = MeanMode([1,2,3]);
console.log("Should be 0");
console.log(out);
out = MeanMode([4,4,4,6,2]);
console.log("Should be 1");
console.log(out);
out = MeanMode([1,1,1,1,2,3]);
console.log("Should be 0");
console.log(out);
out = MeanMode([75,75,76,74]);
console.log("Should be 1");
console.log(out);

