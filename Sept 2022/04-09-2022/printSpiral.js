function printSpiral(matrix){
    let startRow = 0;
    let startCol = 0;
    let endRow = matrix.length-1;
    let endCol = matrix[0].length-1;
    while(startRow<endRow && startCol<endCol){
    for(let i=startCol; i<=endCol; i++){
        console.log(matrix[startRow][i]);
    }
    startRow += 1;
    for(let i=startRow; i<=endRow; i++){
        console.log(matrix[i][endCol]);
    }
    endCol -= 1;
    for(let i=endCol; i>=startCol; i--){
        console.log(matrix[endRow][i]);
    }
    endRow -= 1;
    for(let i=endRow; i>=startRow; i--){
        console.log(matrix[i][startCol]);
    }
    startCol += 1;
    } 
}
let matrix = [
                [1,2,3,4],
                [5,6,7,8],
                [9,10,11,12],
                [13,14,15,16]
]
printSpiral(matrix);
