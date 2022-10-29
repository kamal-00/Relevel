function convertToMatrix(arr,n){
    let resultArray = [];
    tempArray = [];
    for(let i=0; i<arr.length; i++){
        tempArray.push(arr[i]);
        if(tempArray.length==n || i==arr.length-1){
            resultArray.push(tempArray);
            tempArray = [];
        } 
    }  
    return resultArray;    
}
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(convertToMatrix(arr,3));