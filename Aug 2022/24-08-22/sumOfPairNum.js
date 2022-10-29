function findPair(array,num){
    let obj={};
    for(let i=0;i<array.length;i++){
    let firstNum=array[i].toString();
    let secondNum=(num-array[i]).toString();
        if(!obj[firstNum]){
            obj[firstNum]=i.toString();
        }
        if(obj[secondNum] && obj[secondNum]!=i.toString()){
            console.log(firstNum,secondNum);
            return;
        }
    }
    return;
}
findPair([10,20,45,30,5],50);