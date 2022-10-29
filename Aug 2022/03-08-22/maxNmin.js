/*Problem – Given an array of numbers. Your task is to find the minimum and maximum element. For example –
Input – [2,3,15,6]
Output –
Minimum element - 2
Maximum element - 15
Approach – We can use linear search technique in this.
Steps -
1) Initialize min and max to minimum and maximum of first 2 elements
2) Iterate through array from index 3rd and update min and max respectively after comparison
3) Return the output*/

function findMinMax(array){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let i= 0;i<array.length;i++){
        //for updating min element
        if(array[i]<min){
            min = array[i];
        }
        //for updating max element
        if(array[i]>max){
            max = array[i];
        }
    }
    console.log("Min: "+min);
    console.log("Max: "+max);
}
findMinMax([2, 3, 15, 6]);
findMinMax([25, 13, 15, 46]);
findMinMax([42, 93, 5, 26]);
