function sumOfThree(array){
    let count = 0;
    for(let i =0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(j!=i){
                for(let k=0; k<array.length; k++){
                    if(k!=j && k!=i && (array[i]+array[j]+array[k]==0)){
                        console.log(array[i],array[j],array[k]);
                        count++
                    }
                }
            }
        }
    }
    console.log(count);
}

let array = [1,-1,2,0,3,1,-2];
//let array = [-1,2,0,3,1,-2];
sumOfThree(array);   