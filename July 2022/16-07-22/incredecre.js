function increasingdecresing(a,b,c){
    if(a>b && b>c){
        console.log("decreasing order");
    } else if(a<b && b<c){
        console.log("increasing order");
    } else{
        console.log("neither increasing or decreasing order");
    }
}
increasingdecresing(12,45,87);
increasingdecresing(56,44,23);
increasingdecresing(45,12,91);
