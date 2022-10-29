function stringSlectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j].localeCompare(arr[minIndex]) ==-1){  //arr[j]<arr[minIndex] == -1 means true
                minIndex = j;
            }
        }
        if(minIndex != i){
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
let arr = ["India","Australia","China","Russia","Brazil","Japan"];
console.log(stringSlectionSort(arr));