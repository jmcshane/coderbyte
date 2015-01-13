function LetterCapitalize(str) { 

  // code goes here  
  return str.split(" ").map(capFirstLetter).join(" "); 
         
}
   
function capFirstLetter(word) {
  return word[0].toUpperCase() + word.slice(1);
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());   