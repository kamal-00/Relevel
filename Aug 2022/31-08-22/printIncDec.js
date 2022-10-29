function incNum(num){
    if(num==1){
        console.log(num);
        return;
    }
    incNum(num-1);
    console.log(num);
}
incNum(5);

/*function decNum(num){
    console.log(num);
    if(num==1){
        return;
    }
    decNum(num-1);
}
decNum(5);*/

