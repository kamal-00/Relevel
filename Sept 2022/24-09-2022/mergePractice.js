function merge(array,left,mid,right){

    let leftArrayLength = mid-left+1;
    let rightArrayLength = right-mid;
    let leftArray = new Array(leftArrayLength);
    let rightArray = new Array(rightArrayLength);

    for(let i=0; i<leftArrayLength; i++){
        leftArray[i] = array[left+i];
    }
    for(let j=0; j<rightArrayLength; j++){
        rightArray[j] = array[mid+1+j];
    }
    let i,j,k;
    i = 0; j = 0; k = left;
    while(i<leftArrayLength && j<rightArrayLength){
        if(leftArray[i]<rightArray[j]){
            array[k] = leftArray[i];
            i++;
        }else{
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }
    while(i<leftArrayLength){
        array[k] = leftArray[i];
        i++; k++;
    }
    while(j<rightArrayLength){
        array[k] = rightArray[j];
        j++; k++;
    }

}

function preMerge(array,left,right){
    if(left>=right){
        return;
    }
    let mid = parseInt((left+right)/2);
    preMerge(array,left,mid);
    preMerge(array,mid+1,right);
    merge(array,left,mid,right);
}

let array = [16,7,13,52,4,12,87];
preMerge(array,0,array.length-1);
console.log(array);