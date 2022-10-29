function roots(a,b,c){
    let d = b*b-(4*a*c);
    if(d==0){
        console.log("Root is "+ -b/(2*a));
    } else if(d>0){
        console.log(("Roots are "+ (-b+Math.sqrt(d))/(2*a))+ " and "+((-b-Math.sqrt(d))/(2*a)));
    } else{
        console.log("No roots")
    }
}
roots(1,5,1);