function chk(num){
    if(num>0){
        console.log("Positive");
    } else if (num==0){
        console.log("Zero");
    } else if (num<0){
        console.log("Negative");
    } else {
        console.log("Not valid");
    }
}
chk(25);
chk(-10);
chk(0);
