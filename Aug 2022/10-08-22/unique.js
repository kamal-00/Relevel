function unique(matrix){
    row = matrix.length-1;
    col = matrix[0].length-1;
    let max = 0; 
    let flag = 0;
    // Find the Maximum element of matrix.
    for(let i=0; i<=row; i++){
        for(let j=0; j<=col; j++){
            if(matrix[i][j]>max){
                max = matrix[i][j];
            }
        }
    }
    let array = Array(max+1).fill(0); //creating 1d array with size max+1 and filling 0 in all places.
    for(let i=0; i<=row; i++){
        for(let j=0; j<=col; j++){
            array[matrix[i][j]]++;
        }
    }
    for(let i=1; i<=max; i++){
        if(array[i]==1){
            console.log(i+" ");
            flag = 1;
        }
    }
    if(flag==0){
        console.log("No unique element found")
    }
}
let matrix =[
            [2,14,15,18],
            [10,18,14,22],
            [8,21,22,15],
            [10,14,21,28]
            ];
unique(matrix);