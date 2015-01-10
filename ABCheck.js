function ABCheck(str) {
    return /.*a.{3}b.*/.test(str) || /.*b.{3}a.*/.test(str);
}

var out = ABCheck("bzzza");
console.log(out);
