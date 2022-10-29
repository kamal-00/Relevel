function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let j = i-1;
        let a = arr[i];
        while(j>=0 && arr[j]>a){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = a;
    }
    return arr;
}
let arr = [9,6,7,3,2];
console.log(insertionSort(arr));