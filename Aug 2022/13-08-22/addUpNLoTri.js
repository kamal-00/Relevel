function sumOfUpperLowerTri(matrix){
    let lowersum =0;
    let uppersum =0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<=i;j++){
            lowersum+=matrix[i][j];
        }
        for(let j=i;j<matrix[i].length;j++){
            uppersum+=matrix[i][j];
        }
    }
    console.log(lowersum);
    console.log(uppersum);
}
let matrix=[
    [2,15,4],
    [1,2,15],
    [2,10,7]
]
sumOfUpperLowerTri(matrix);