function secondSmallest(array){
    let smallest=Number.MAX_VALUE;
    let secSmallest=Number.MAX_VALUE;
    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
            smallest=array[i];
        }
    }
    for(let j=0;j<array.length;j++){
        if(array[j]==smallest){
            continue;
        } else if(array[j]<secSmallest){
            secSmallest=array[j];
        }
    }
    console.log("Second smallest is ", secSmallest);
}
let array=[11,34,54,22,13,78];
secondSmallest(array);