function sumOfDigit(num){
    strnum = num.toString();
    let sum=0;
    for(let i=0;i<=strnum.length-1;i++){
        sum+=Number(strnum[i]);
    }
    if(sum>9){
        sumOfDigit(sum);
    }else{
    console.log(sum);
    }
}
sumOfDigit(12345);