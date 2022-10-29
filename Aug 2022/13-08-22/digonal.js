function digonalMatrix(matrix){
    for(let i=0;i<matrix.length;i++){
        for(j=0;j<matrix[i].length;j++){
            if((i!=j) && (matrix[i][j]!=0)){
                return false;
            }
        }
    }
    return true;
}
const matrix=[ 
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4] 
]

console.log(digonalMatrix(matrix));