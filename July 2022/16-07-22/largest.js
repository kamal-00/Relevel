function largestnum(a,b,c){
    if(a>b && a>c){
        console.log(a+ " is largest"); //if "a is largest" then it will not print number.
    } else if(b>a && b>c){
        console.log(b+ "is largest");
    } else{
        console.log(c+ "is largest");
    }
}
largestnum(25,90,78);
largestnum(10,20,30);
largestnum(78,30,5);
