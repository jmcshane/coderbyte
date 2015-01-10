function SimpleAdding(num) { 
  
  if (num === 0 || num === 1) {
    return num;
  }
  return num + SimpleAdding(num - 1); 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());           
