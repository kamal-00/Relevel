  function checkSorted(array,i){
    if(i==array.length-1){
        return true;
    }
    if(array[i]>array[i+1]){
        return false;
    }
    return checkSorted(array,i+1);
  }

  console.log(checkSorted([1,3,2,4,5],0));