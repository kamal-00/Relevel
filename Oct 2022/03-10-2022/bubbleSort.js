function bubbleSort(array){
    let n = array.length;
    let isSwaped = false;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            if(array[j]>array[j+1]){
                swap(array,j,j+1);
                isSwaped = true;        
            }
        }
        if(isSwaped == false){
            break;
        }
    }
    return array;
}

function swap(array,m,n){
    let temp = array[m];
    array[m] = array[n];
    array[n] = temp;
}

let arr = [7,11,9,2,17,4];
console.log(bubbleSort(arr));