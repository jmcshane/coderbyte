function OffLineMinimum(arg) {

  var numTest = /\d/;
  var numArr = [];
  var answerArr = [];
  var lowest = 10;
  var lowestInd = 0;
  for (var i=0;i<arg.length;i++) {
  
    if (numTest.test(arg[i])) {
      numArr.push(arg[i]); 
        }
        
    else {
      for (var j=0;j<numArr.length;j++) {
        if (numArr[j] < lowest) {
        lowest = numArr[j];
        lowestInd = numArr.indexOf(lowest);
        }
        }
          
      answerArr.push(lowest);
      lowest = 10;
      numArr.splice(lowestInd,1);
            
    }
  
  }
  
  return answerArr.join(",");
         
}

