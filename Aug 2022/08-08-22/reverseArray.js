//Problem – Given an array of numbers. You need to reverse the array. For example –
//Input – [1,2,3,4,5]
//Output – [5,4,3,2,1]
function reverse(array){
    let result =[];
    let j=0;
    for(let i = array.length-1;i>=0;i--){
        result[j]=array[i];
        j++;
    }
    console.log(result);
}
reverse([1,2,3,4,5]);