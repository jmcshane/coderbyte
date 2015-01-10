function SimpleSymbols(str) { 
  if (isALetter(str[0]) ||isALetter(str[str.length -1])) {
    return false;
  }
  var splitString= str.split("+").filter(function(value) {return value.length > 1});
  if (splitString.length === 0) 
  {return true;}
  
  return !splitString.some(isALetter);
         
}

function isALetter(val) {
    return /.*[a-zA-Z].*/.test(val);
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline()); 