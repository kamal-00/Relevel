//error in program documrnt is not defined
function printSubsequences(array, index, result) {
    if (index === array.length) {
        if (result.length > 0){ 
            document.write(`[${result}]<br>`);
        }  
    } else {
      printSubsequences(array, index + 1, result);
      result.push(array[index]);
      printSubsequences(array, index + 1, result);
      result.pop();
    }
    return;
  }
  
  let array = [1, 2, 3];
  
  let result = new Array();
  
  printSubsequences(array, 0, result);