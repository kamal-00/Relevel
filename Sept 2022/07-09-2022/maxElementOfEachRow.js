function maxElementOfEachRow(matrix){
    let row = matrix.length-1;
    let col = matrix[0].length-1;
    for(let i=0; i<=row; i++){
        let max = Math.max();
        for(let j=0; j<=col; j++){
            if(matrix[i][j]>max){
                max = matrix[i][j];
            }
        }
        console.log(max);
    }
}
let matrix =[
            [2,14,15,16],
            [7,18,20,22],
            [8,21,23,24],
            [10,26,27,28]
            ];
maxElementOfEachRow(matrix);