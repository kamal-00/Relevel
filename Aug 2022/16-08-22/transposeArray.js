function transposeOfArray(matrix){
    let newMatrix=[[],[],[],[]];
    for(let i=0;i<matrix[0].length;i++){
        for(let j=0;j<matrix.length;j++){
            newMatrix[j][i]=matrix[i][j];
        }
    }
    console.log(newMatrix);
}
const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
transposeOfArray(matrix);