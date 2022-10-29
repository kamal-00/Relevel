function asending(array){
    let newArray=[];
    for(let i=1;i<array.length;i++){
        for(let j=0;j<i;j++){
            if(array[j]>array[i]){   //for ascending order. 
            //if(array[j]<array[i]){ //for descending order.   
                let x=array[i];
                array[i]=array[j];
                array[j]=x;
            }
        }
    }
    console.log(array);
}
let array=[7,5,15,3,27,2,45,1];
asending(array);

//let array=[7,5,15,3,27,2,45,1];
//array.sort(function(a,b){return b-a});
// console.log(array);