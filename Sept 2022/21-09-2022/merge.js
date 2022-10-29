function mergeArray(arr1,arr2){
    let l1 = arr1.length;
    let l2 = arr2.length;
    
    let mergeArr = [];
    
    let i,j,k;
    i=j=k=0;
    while(i<l1 && j<l2){
        if(arr1[i]<arr2[j]){
            mergeArr[k++] = arr1[i++];
        } else {
            mergeArr[k++] = arr2[j++];
        }
    }
    for(i ; i<l1; i++){
        mergeArr[k++] = arr1[i];
    }
    for(j ; j<l2; j++){
        mergeArr[k++] = arr2[j];
    }
    return mergeArr;
}
let arr1 = [2,10,18,20,23];
let arr2 = [4,9,19,25];
console.log(mergeArray(arr1,arr2));