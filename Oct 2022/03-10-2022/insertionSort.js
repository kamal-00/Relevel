function insertionSort(array){
    for(let i = 1; i < array.length; i++){
        for(let j = i; j >= 1; j--){
            if(array[j]<array[j-1]){
                swap(array,j,j-1);
            }
        }
    }
    return array;
}

function swap(array,m,n){
    let temp = array[m];
    array[m] = array[n];
    array[n] = temp;
}

let arr = [7,2,91,77,3];
console.log(insertionSort(arr));