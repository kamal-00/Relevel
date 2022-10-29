function waveForm(matrix){
    let startRow=0;
    let startCol=0;
    let endRow=matrix.length-1;
    let endCol=matrix[0].length-1;
    for(let i=startCol;i<=endCol;i++){
        if(i%2==0){
            for(let j=startRow;j<=endRow;j++){
                console.log(matrix[j][i]);
            }
        } else{
            for(let j=endRow;j>=startRow;j--){
                console.log(matrix[j][i]);
            }
        }
    }
}
const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]
];
waveForm(matrix); //1,5,9,13,14,10,6,2,3,7,11,15,16,12,8,4