function decN(n){
    if(n===1){
        console.log(1);
        return;
    }
    console.log(n);
    decN(n-1);
}
decN(5);  //5,4,3,2,1