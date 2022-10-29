var a = 1;
var b = 5;
var c = 1;

var result = b*b-(4*a*c);

if (result>0) {
    var r1 =(-b+(Math.sqrt(b*b-(4*a*c))))/(2*a);  //"Math.sqrt" is used to square root the number [b*b-(4*a*c)].
    var r2 =(-b-(Math.sqrt(b*b-(4*a*c))))/(2*a);
    console.log("The roots are" + r1 + "and" + r2);
} else if (result==0) {
    var r1 = -b/(2*a);
    console.log("The root is"+ r1);
} else {
    console.log("No real roots.")
}
