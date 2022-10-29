function insertElement(arr,element){
    for(let i= arr.length-1; i>=0; i--){
        if(arr[i]>element){
            arr[i+1] = arr[i];
        }
        else{
            arr[i+1] = element;
            break;
        }
    }
    return arr;
}
let arr = [3,6,11,15,19,25,30];
console.log(insertElement(arr,12));