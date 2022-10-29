function selectionSort(arr){
    let minIndex = 0;
    for(let i=0; i<arr.length-1; i++){
        minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !=i){
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }    
    }
    return arr;
}
let arr = [10, 5, 8, 20, 2, 18];
console.log(selectionSort(arr));