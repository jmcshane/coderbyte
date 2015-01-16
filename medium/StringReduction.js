function StringReduction(arg) {
    console.log(arg);
    if (allSame(arg)){
        return arg.length;
    }
    
    var index = findFirstDifference(arg);
    return StringReduction(reduceArgAt(arg, index));
}

function allSame(arg){
    var value = arg[0];
    var i;
    for (i = 1; i < arg.length; i++) {
        if(arg[i].localeCompare(value) !== 0) {
            return false;
        }
    }
    return true;
}

function findFirstDifference(arg) {
    var char = arg[0];
    for (var i = 1; i < arg.length; i++) {
        if (arg[i].localeCompare(char) !== 0) {
            return i - 1;
        }
    }
}

function reduceArgAt(arg, index) {
    console.log(arg, index);
    var values = arg.slice(index, index + 2);
    console.log(values);
    var chars = ['a', 'b', 'c'];
    values.split("").forEach(function(a) {
        chars.splice(chars.indexOf(a), 1);
    });
    return arg.slice(0, index) + chars[0] + arg.slice(index + 2, arg.length);
}

var out = StringReduction("aaaaaa");
console.log("Should be 6");
console.log(out);
out = StringReduction("abcabc");
console.log("Should be 2");
console.log(out);
out = StringReduction("acab");
console.log("Should be 1");
console.log(out);
out = StringReduction("abcc");
console.log("Should be 3");
console.log(out);

