/*Given a 2D array of size MxN, you need to display N integers which
denotes the column wise addition of the 2D array*/
function colSum(matrix){
    let colSumArray = [];
    for(let j=0; j<matrix[0].length; j++){
        let sum = 0;
        for(let i=0; i<matrix.length; i++){
            sum+=matrix[i][j];
        }
        colSumArray.push(sum);
    }
    console.log(colSumArray);
}
let matrix =[
            [3,4,5],
            [3,4,2],
            [2,3,4],
            [4,4,4]
            ];
colSum(matrix);            