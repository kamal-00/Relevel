/*Print Matrix in wave form.
BED-Class #180DaysofPurpose
Logic:
● Print the first column in downward direction, then the second column in upward direction and so
on.
● Increment to next column whenever you reach the extremes of the current column, while
printing the matrix in column-wise fashion.*/
function printWave(matrix){
    let startRow = 0;
    let startCol = 0;
    let endRow = matrix.length-1;
    let endCol = matrix[0].length-1;
    for(let j=startCol; j<=endCol; j++){
        if(j%2==0){
            for(let i=startRow; i<=endRow; i++){
                console.log(matrix[i][j]);
            }
        } else{
            for(let i=endRow; i>=startRow; i--){
                console.log(matrix[i][j]);
            }
        }
    }
}
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
printWave(matrix);