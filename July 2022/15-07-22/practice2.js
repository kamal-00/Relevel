function pairOfInt(num){
    for(b=1;b<=num;b++){
        var r1= b*b;
        for(a=1;a<=b;a++){
            var r2= a*a;
            if(a*a+b*b==num){
                console.log(a,b);
            }
        }  
    }
}
pairOfInt(50);