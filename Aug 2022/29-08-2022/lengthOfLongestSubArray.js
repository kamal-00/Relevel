/*Input: arr[] = {1, 9, 3, 10, 4, 20, 2}
Output: 4*/

function lenOfLongestSubArray(array){
    let count=0;
    let largest=0;
    let sorted = array.sort(function(a,b){return a-b});
    for(let i=0; i<array.length; i++){
        count++
        if(sorted[i]+1!==sorted[i+1] || i==sorted.length-1){
            if(largest<count){
            largest=count;
            }
            count=0;    
        } 
    }
    return largest;
}
let array=[1, 9, 3, 10, 4, 20, 2, 11, 14, 13];
console.log(lenOfLongestSubArray(array));