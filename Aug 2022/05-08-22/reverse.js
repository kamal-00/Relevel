
/*function reverse(array){
    let reverseArray = [];
    for(let i = array.length-1; i>=0;i--){
        reverseArray.push(array[i]);
    }
    console.log(reverseArray);
}
let array = [1,2,3,4,5];
reverse(array);*/

function Reverse(Array){
    const result = [];
    let j = 0;
    for(i= Array.length-1;i>=0;i--){
        result[j]=Array[i];
        j++;
    }
    console.log(result);
}
Reverse([1,4,9,6]);