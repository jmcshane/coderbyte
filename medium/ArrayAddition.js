function ArrayAddition(arg) {
    var max = Math.max.apply( Math, arg );
    
    arg.splice(arg.indexOf(max), 1);
    
    return recurse(arg, max, 0);
   
}

function recurse(arr, largest, i) {
    console.log(arr, largest);
    if (largest === 0) {
        return true;
    } else if (i === arr.length) {
        return false;
    }
    var value = arr[i];
    i++;
    return (recurse(arr, largest, i) ||recurse(arr, largest - value, i));
}
var out = ArrayAddition([1,2,3,5]);
console.log("Should be true");
console.log(out);
out = ArrayAddition([1,1,1,6]);
console.log("Should be false");
console.log(out);
out = ArrayAddition([23,42,65,1]);
console.log("Should be true");
console.log(out);
out = ArrayAddition([100,200, 200, 200, 500]);
console.log("Should be true");
console.log(out);

