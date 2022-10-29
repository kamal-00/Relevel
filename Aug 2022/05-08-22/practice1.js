function revArray(array){
    let result =[];
    let j = 0;
    for(let i=array.length-1;i>=0;i--){
        result[j]= array[i];
        j++;
    }
    console.log(result);
}
revArray([1,2,3,4,5]);