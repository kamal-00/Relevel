//Given two numbers, find the least possible positive integer that is divided by them.
function lcm(a,b){
    let i=1;
    while(i<=a*b){
        if(i%a==0 && i%b==0){
            console.log(i);
            break;
        } 
        i++;
    }
}

lcm(10,5);
lcm(8,12);
lcm(12,16);



/*function LCM(num1, num2){
    if(num1 > num2)
    greater = num1;
    else
    greater = num2;
    while(true){
    if((greater % num1 == 0) && (greater % num2 == 0)){
    lcm = greater;
    break;
    }
    greater += 1;
    }
    return lcm
    }
    console.log(LCM(12,16));*/
