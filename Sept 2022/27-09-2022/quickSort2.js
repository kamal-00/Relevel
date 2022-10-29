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

let array = [74,31,2,13,7,92,43,22,27];
quickSort(array,0,array.length-1);
console.log(array);