function reducedArray(array){
    let n = array.length;
    let result = Array(n);
    for(let i=1; i<=n; i++){
        let largest = Math.max();
        let lIndex;
        for(let j=0; j<n; j++){
            if(array[j]>largest){
                largest = array[j];
                lIndex = j;
            }
        }   
        result[lIndex] = n-i;
        array[lIndex] = Math.max(); 
    }
    console.log(result);
}
let array = [1,2,5,10,3,4];
reducedArray(array);