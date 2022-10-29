// Step 1: Find Decreasing Array
    // Find start by decreasing point in array
    // FInd end by end of array or start of next increasing subarray
// Step 2: Reverse Decreasing Array and put in original array
// Step 3: Check if array is sorted or not.
function canArrayBeSorted(array){
    if(array.length==1){
        return true;
    }
    //Finding decreasing array
    let startIndex;
    for(let i = 0;i<array.length;i++){
        if(array[i]>array[i+1]){
            startIndex = i;
            break;
        }
    }
    //Find endIndex
    for(let i = startIndex;i<array.length;i++){
        if(array[i]<array[i+1] || i==array.length-1){
            endIndex = i;
            break;
        }
    }
    //create decreasing array
    decreasingArray =[];
    let j=0;
    for(let i=startIndex;i<=endIndex;i++){
        decreasingArray[j]=array[i];
        j++;
    }
    //reversing sub array and putting it into main array
    for(let i=decreasingArray.length-1;i>=0;i--){
        array[startIndex]=decreasingArray[i];
        startIndex++;
    }
    console.log("Main Array After Reverse:", array);
    //check if sorted or not
    for(let i=0;i<array.length-1;i++){
        if(array[i]>array[i+1]){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
canArrayBeSorted([1,2,5,4,3]);