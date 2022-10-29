function reducedArray(array){
    let n = array.length;
    let result = Array(n);
    let counter = 1;
    let previousLargest;
    for(let i=1; i<=n; i++){
        let largest = Math.max();
        let lIndex;
        for(let j=0; j<n; j++){         
            if(array[j]>largest){
                largest = array[j];
                lIndex = j;
            }
        }
        if(largest==previousLargest){
            counter--;
        } 
        previousLargest = largest;
        result[lIndex] = n-counter;
        array[lIndex] = Math.max();
        counter++; 
    }
    console.log(result);
}
//let array = [1,2,5,10,3,4];
let array = [4,10,9,3,5,10];
reducedArray(array);