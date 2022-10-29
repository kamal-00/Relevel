function subArray(array){
    let tempArray=[];
    let resultArray=[];
    let remainingArrayLength;  
    for(let i=0;i<=array.length-1;i++){
        for(let j=0;j<array.length;j++){
            tempArray.push(array[j]);
            if(tempArray.length==i+1){
                j=j-i;

                resultArray.push(tempArray);
                tempArray=[];
            }
        }
    }
    return resultArray;
}
console.log(subArray([1,2,3]));