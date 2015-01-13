function LetterChanges(str) { 

  // code goes here  
  return str.split("").map(letterReplace).map(determineUpperCase).join("");
         
}

function letterReplace(character) {
  //apply
  var index = character.charCodeAt();
  if (index < 97 || index > 122) {
      return character;
  }
  index++;
    if (index === 123) {
        index = index - 26;
    }

  return String.fromCharCode(index);
}

function determineUpperCase(character) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(character) > -1) {
    character = character.toUpperCase();
  }
  return character;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           
