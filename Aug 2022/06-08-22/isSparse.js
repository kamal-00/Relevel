function isSparse(matrix){
    totalElement= matrix.length*matrix[0].length;
    let zeroCount=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                zeroCount+=1;
                if(zeroCount>((1/2)*totalElement)){
                    return true;
                }
            }
        }
    }
    return false;
}
let matrix=[
    [1,0.15,0],
    [7,0,0,22],
    [0,0,0,0],
    [10,0,0,28]
];
console.log(isSparse(matrix));