function quickSort(array,low,high){
    let start= low;
    let end= high;
    if(start>=end){
        return;
    }
    let mid = Math.floor((start+end)/2);
    let pivot = array[mid];
    while(start<end){
        while(array[start]<pivot){
            start++;
        }
        while(array[end]>pivot){
            end--;
        }
        if(start<=end){
            swap(array,start,end);
            start++;
            end--;
        }
    }
    quickSort(array,low,end);
    quickSort(array,start,high);
}

function swap(array, start, end){
    let temp = array[start];
    array[start]=array[end];
    array[end]=temp;
}

let array = [15,13,2,17,9,12,0,4];
quickSort(array,0,array.length-1);
console.log(array);