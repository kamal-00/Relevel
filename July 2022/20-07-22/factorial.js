// Find the result 1*2*3*4*5 = ?
function factorial(num){
    var result=1;
    for(i=1;i<=num;i++){
        result = result*i;     //r=1*1  //r=1*2  //r=2*3  //r=6*4  //24*5
    }
    console.log(result);
}
factorial(5);