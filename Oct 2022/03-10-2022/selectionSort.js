function selectionSort(array){
    for(let i=0; i<array.length-1; i++){
        let minIndex = i;
        for(let j=i+1; j<array.length; j++){
            if(array[j]<array[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
        let temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
        }
    }
    return array;
}

let arr = [8,0,7,1,3];
console.log(selectionSort(arr));
