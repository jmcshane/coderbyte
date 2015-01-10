function ExOh(arg) {
    
    var exmatch = arg.match(/x/g);
    var exs = exmatch ? exmatch.length : 0;
    var ohmatch = arg.match(/o/g);
    var ohs = ohmatch ? ohmatch.length : 0;
    return  exs === ohs;
}

var out = ExOh('asasdxxasoio');
console.log(out);
