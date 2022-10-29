//Find the fifth largest element.

function kthLargest(arr,k){
    quickSelect(arr,0,arr.length-1);
}

function quickSelect(array,low,high){
    let start = low;
    let end = high;
    let mid = Math.floor((start+end)/2);
    let pivot = array[mid];
    if(start>=end){
        console.log("kth element is: "+array[array.length-k]);
        return;
    }
    
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
    let pivotIndex = array.indexOf(pivot);

    if(array.length-k == pivotIndex){
        console.log("kth element is: "+array[pivotIndex]);
        return;
    } else if(array.length-k < pivotIndex){
        quickSelect(array,low,end);
    } else {
        quickSelect(array,start,high);
    }
}

function swap(array,start,end){
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
}

let arr = [15,13,0,17,9,12,1,4];
let k = 5;
kthLargest(arr,k);
console.log(arr);
