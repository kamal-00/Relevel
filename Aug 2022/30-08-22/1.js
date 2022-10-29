function arraySortedOrNot(arr,n){
    // Array has one or no element or the
    // rest are already checked and approved.
    if (n == 1 || n == 0)
        return true;
 
    // Unsorted pair found (Equal values allowed)
    if (arr[n - 1] < arr[n - 2])
        return false;
 
    // Last pair was sorted
    // Keep on checking
    return arraySortedOrNot(arr, n - 1);
}
console.log(arraySortedOrNot([1,3,2,4,5], 4));