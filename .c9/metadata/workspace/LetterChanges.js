{"filter":false,"title":"LetterChanges.js","tooltip":"/LetterChanges.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":32,"column":0},"action":"insert","lines":["function LetterChanges(str) { ","","  // code goes here  ","  return str.split(\"\").map(letterReplace).map(determineUpperCase).join(\"\");","         ","}","","function letterReplace(character) {","  //apply","  var index = character.charCodeAt();","  if (index < 97 || index > 122) {","      return character;","  }","  index++;","    if (index === 123) {","        index = index - 26;","    }","","  return String.fromCharCode(index);","}","","function determineUpperCase(character) {","  var vowels = [\"a\", \"e\", \"i\", \"o\", \"u\"];","  if (vowels.indexOf(character) > -1) {","    character = character.toUpperCase();","  }","  return character;","}","   ","// keep this function call here ","// to see how to enter arguments in JavaScript scroll down","LetterChanges(readline());           ",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":21},"end":{"row":9,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1420879318954,"hash":"30cfdfe98e8d27066581e43a981e85146396105c"}