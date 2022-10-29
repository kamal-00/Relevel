/*Given a 2D array, find the sum of the diagonal and the boundary elements of it.
In the given matrix of size 5x5 the colored cell marks the diagonal and the
boundary elements. Output-195.*/

function diagonalAndBoundarySum(matrix){
    let row = matrix.length-1;
    let col = matrix[0].length-1;
    let sum = 0;
    for(let i=0; i<=row; i++){
        for(let j=0; j<=col; j++){
            if(i==j || (i,j==col-i) || i==0 || i==row || j==0 || j==col){
                sum+= matrix[i][j];
            }
        }
    }
    console.log(sum);
}
//Input:
let matrix =[ 
            [ 1, 2, 3, 4, 1],
            [ 5, 6, 7, 8, 2],
            [ 9,10,11,12,13],
            [13,14,15,16,15],
            [11,12,15,19,15],
            ];
diagonalAndBoundarySum(matrix);