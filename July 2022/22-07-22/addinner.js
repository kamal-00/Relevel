// Sum of inner digits 1234 and 170

function sumofinner(n){
    var strn = n.toString();
    if(strn.length<3){
        console.log("No inner digit")
    } else {
    let sum = 0;
    for(i=1;i<=strn.length-2;i++){
        sum=sum+ Number(strn[i]);
    }
    console.log(sum);
    }
}
sumofinner(1234);
sumofinner(170);
sumofinner(70);