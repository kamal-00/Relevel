//Give an array of name of country, you are supposed to sort it in
//lexicographical order using the bubble sort

function bubbleSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let isSwapped = false;
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j].localeCompare(arr[j+1]) != -1){ // arr[j]<arr[j+1] == -1 true
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(isSwapped == false) break;
    }
    return arr;
}
var arr = ["India", "Australia", "China", "Brazil"];
console.log(bubbleSort(arr));
//time complexity = O(n^2) i.e n*n