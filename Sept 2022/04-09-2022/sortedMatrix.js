/*Write an efficient algorithm to search a value in a 2D matrix in which
the rows are in sorted order and the first integer of each row is greater
than the last integer of the previous row.*/

function sortedMatrix(matrix){
    let array = [];
    let row = matrix.length;
    let col = matrix[0].length;
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            array.push(matrix[i][j]);
        }
    }
    array.sort((a,b)=>a-b);
    let tempArray =[];
    let sorMatrix = [];
    for(let i=0; i<=array.length-1; i++){
        tempArray.push(array[i]);
        if(tempArray.length==col){
            sorMatrix.push(tempArray);
            tempArray = [];
        }
    }
    console.log(sorMatrix);
}
let matrix =[
                [25,12,48,95],
                [46,32,75,24],
                [11,66,53,89],
                [38,71,18,22]
            ];
sortedMatrix(matrix);            