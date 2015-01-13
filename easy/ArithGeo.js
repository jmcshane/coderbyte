function ArithGeo(arg) {
    if (arg.length <= 2) {
        return 'Arithmetic';
    }
    if (recurseArth(arg.slice(1), arg[0] - arg[1])) {
        return 'Arithmetic';
    } else if (recurseGeo(arg.slice(1), arg[1] / arg[0])) {
        return 'Geometric';
    } else {
        return -1;
    }
}



function recurseArth(arr, value) {
    if (arr.length < 2) {
        return true;
    }
    if (arr[0] - arr[1] !== value) {
        return false;
    }
    else {
        return recurseArth(arr.slice(1), value);
    }
}

function recurseGeo(arr, value) {
    if (arr.length < 2) {
        return true;
    }
    if (arr[1] / arr[0] !== value) {
        return false;
    }
    else {
        return recurseGeo(arr.slice(1), value);
    }
}

var out = ArithGeo([1,2,3,4,5]);
console.log(out);

out = ArithGeo([1,2,4,8,16]);
console.log(out);

out = ArithGeo([-1,1,-1,1,-1]);
console.log(out);
