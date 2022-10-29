//Problem – Given an array of numbers. Your task is to find the minimum and maximum element. For example –
//Input – [2,3,15,6]
//Output –
//Minimum element - 1
//Maximum element - 15
//Approach – We can use linear search technique in this.
//Steps -
//1) Initialize min and max to minimum and maximum of first 2 elements
//2) Iterate through array from index 3rd and update min and max respectively after comparison
//3) Return the output

function maxmin(array){
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for(i = 0; i<array.length; i++){
        if(array[i]<min){
            min = array[i];
        }
        if(array[i]>max){
            max = array[i];
        }
    }
    console.log(min);
    console.log(max);
}
let array = [62,45,15,67,7,3];
maxmin(array);