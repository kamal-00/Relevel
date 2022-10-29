function sumofnum(num){
    numstr = num.toString();
    if(numstr.length==1){
        return numstr;
    }
    let sum = 0;
    for(let i=0;i<numstr.length;i++){
        sum+= Number(numstr[i]);
    }
    if(sum>9){
        sumofnum(sum)
    } else {
        console.log(sum);
    }
}
sumofnum(1234);
sumofnum(9875);
