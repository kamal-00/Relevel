function rotateMatrixBy90(matrix){
    let requiredMatrix = [[],[],[]];
    let startRow = 0;
    let startCol = 0;
    let endRow = matrix.length-1;
    let endCol = matrix[0].length-1;
    for(let i=startRow; i<=endRow; i++){
        for(let j=startCol; j<=endCol; j++)
        requiredMatrix[j][endCol-i]=matrix[i][j];
    }
    console.log(requiredMatrix);
}

let matrix = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
]
rotateMatrixBy90(matrix);