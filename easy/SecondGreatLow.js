function SecondGreatLow(arg) {
    var sortArr = [];
    if (arg.length == 2 && (arg[0] === arg[1])) {
        return arg[0] + " " + arg[1];
    }
    var elt;
    while ((elt = arg.pop()) != null) {
        if (sortArr.indexOf(elt) === -1) {
            sortArr.push(elt);
        }
    }
    sortArr.sort(function(a,b){ return a-b});
    console.log(sortArr);
    return sortArr[sortArr.length - 2] + " " + sortArr[1];
}



var out = SecondGreatLow([1,2]);
console.log(out);

out = SecondGreatLow([1,2,2,2,2,5]);
console.log(out);

out = SecondGreatLow([5,5,5,7,100, 100]);
console.log(out);


out = SecondGreatLow([-4, -5, 10, 2]);
console.log(out);
