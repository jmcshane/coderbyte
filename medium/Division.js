function Division(a, b) {
    if (b === 0) {
       return a;
    }else {
       return Division(b, a % b);
    }
}


var out = Division(5,2);
console.log("Should be 1");
console.log(out);
out = Division(36,54);
console.log("Should be 18");
console.log(out);

out = Division(1110,54);
console.log("Should be 6");
console.log(out);

out = Division(200,200);
console.log("Should be 200");
console.log(out);

out = Division(25, 26);
console.log("Should be 1");
console.log(out);
