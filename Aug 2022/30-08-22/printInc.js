function incN(n){
    if(n===1){
        console.log(1);
        return;
    }
    incN(n-1);
    console.log(n);
}
incN(5);  //1,2,3,4,5