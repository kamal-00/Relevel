var step=0;
function makeItOne(num){
    step++
    if(num==1){
        console.log(step);
        return;
    }
    //step++;
    num=num-1;
    if(num%2==0){
        num=num/2;
    }
    if(num%3==0){
        num=num/3;
    }
    makeItOne(num);
}
//makeItOne(49);
makeItOne(10);
//makeItOne(20);