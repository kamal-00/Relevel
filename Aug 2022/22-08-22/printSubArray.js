function printSubArray(array){
    let result =[];
    let tempArray = [];
    for(let i=1;i<=array.length;i++){
        for(let j=0;j<array.length;j++){
            tempArray.push(array[j]);
            if(tempArray.length==i){
                result.push(tempArray);
                tempArray=[];
            }
        }  
    }
    return result;
}
let array =[1,2,3];
console.log(printSubArray(array));