function pairNum(array,num){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j]==num){
                console.log(array[i],array[j]);
                return;
            }
        }
    }
    console.log("no Pair");
    return;
}
let array = [20, 10, 10, 40, 50, 70];
let num = 50;
pairNum(array,num);