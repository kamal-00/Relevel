//Problem – Given an array. You need to shift negative elements to the end of an array. For example –
//Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
//Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 }
function PushNegative(array){
    var newArray=[];
    for(let i=0;i<array.length;i++){
        if(array[i]>=0){
            newArray.push(array[i]);     
        }
    }
    for(let i=0;i<array.length;i++){
        if(array[i]<0){
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}
PushNegative([-5,3,-4,88,-9,-10,21,5,6]);