function OverlappingRectangles(arg) {
    
    arg = splitApart(arg[0]);
    console.log(arg);
    var rect1 = new Rectangle(arg[0], arg[1], arg[2], arg[3]);
    var rect2 = new Rectangle(arg[4], arg[5], arg[6], arg[7]);

    console.log(rect1);
    console.log(rect2);
    var overlap = rect1.overlap(rect2);
    
    if (overlap === 0){ return 0;}
    
    return Math.floor(rect1.area() / overlap);
    
}

function Rectangle(v1, v2, v3, v4) {
    
    this.left = Math.min.apply(Math, getCoord(0, [v1, v2, v3, v4]));
    this.right = Math.max.apply(Math, getCoord(0, [v1, v2, v3, v4]));
    this.top = Math.max.apply(Math, getCoord(1, [v1, v2, v3, v4]));
    this.bottom = Math.min.apply(Math, getCoord(1, [v1, v2, v3, v4]));
    this.area = function() {
        return (this.right - this.left) * (this.top - this.bottom);
    }
    
    this.overlap = function(rect) {
        var left = Math.max.apply(Math, [rect.left, this.left]);
        var right = Math.min.apply(Math, [rect.right, this.right]);
        var top = Math.min.apply(Math, [rect.top, this.top])
        var bottom = Math.max.apply(Math, [rect.bottom, this.bottom]);
        return (top - bottom) * (right - left);
    }
}

function getCoord(index, array) {
    var out = array.map(function(a) {
        return a.slice(1, a.length - 1);
    }).map(function (a) {
        return a.split(",");
    }).map(function(a) {
        return parseInt(a[index]);
    });
    return out;
}

function splitApart(str) {
    var output = [];
    var currOne = [];
    var inside = false;
    str.split("").forEach(function(a) {
        if (/[\(\)]/.test(a)) {
            currOne.push(a)
            inside = !inside;
        } else if (!inside && /,/.test(a)) {
            output.push(currOne);
            currOne = [];
        } else {
            currOne.push(a);
        }
    });
    output.push(currOne);
    console.log(output);
    return output.map(function(a) {return a.join("")});
}


var out = OverlappingRectangles(["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"]);
console.log("Should be ");
console.log(out);
out = OverlappingRectangles(["(0,0),(2,0),(0,4),(2,4),(0,1),(2,1),(0,4),(2,4)"]);
console.log("Should be ");
console.log(out);
out = OverlappingRectangles(["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]);
console.log("Should be 3");
console.log(out);
out = OverlappingRectangles(["(0,0),(5,0),(0,2),(5,2),(3,1),(5,1),(3,-1),(5,-1)"]);
console.log("Should be ");
console.log(out);

