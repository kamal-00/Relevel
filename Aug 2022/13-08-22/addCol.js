function addrow(matrix){
    let colSum=[];
    for(let i=0;i<matrix[0].length;i++){
        let sum=0;
        for(let j=0;j<matrix.length;j++){
            sum+=matrix[j][i];
        }
        colSum.push(sum);
    }
    console.log(colSum);
}
let matrix=[
    [3,4,5],
    [3,4,2],
    [2,3,4],
    [4,4,4]
]
addrow(matrix);