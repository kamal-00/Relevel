function singleTo2D(array){
    let newArray=[];
    let tempArray=[];
    for(let i=0;i<array.length;i++){
        
        tempArray.push(array[i]);
        if(i%2!=0){
            newArray.push(tempArray);
            tempArray=[];
        } 
    }
    console.log(newArray);
}
let array=[1,2,3,4,5,6,7,8,9,10];
singleTo2D(array);