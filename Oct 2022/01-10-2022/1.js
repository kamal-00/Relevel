function count(array){
    let c = 0;
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] == array[j]){
                array[j] == array[j]+1;
                c++;
            }
        }  
    }
    console.log(c);
}
//let array = [1,5,5];
let array = [1,0,3,1,2,3];
count(array);