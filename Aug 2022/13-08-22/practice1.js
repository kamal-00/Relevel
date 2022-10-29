function search(A,x){
    if (A.length == 0)
        return false
    let row = A.length
    let col = A[0].length
    let i = 0;
    let j = col-1;
    while (i < row && j >= 0){
        if (A[i][j] == x) // If current element is our target element -> print output
            return true
        else if (A[i][j] < x) // If current element < target element -> increment the row
            i += 1
        else if (A[i][j] > x) // If current element > target element -> decrement the column
            j -= 1
    }
    return false
}

let x = 6
A=[
    [2,4,5,6],
    [7,8,10,12],
    [13,15,16,18],
    [20,21,22,23]
]
console.log(search(A,x))  