function cyclicRotate(array){
    let cyclicArray=[];
    let j=1;
    for(let i=0;i<array.length;i++){
        cyclicArray[j]=array[i];
        j++;
        if(i==array.length-2){
            j=0;
        }
    }
    console.log(cyclicArray);
}
cyclicRotate([3,88,21,5,6]); //[6,3,88,21,5];