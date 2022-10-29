//Program to check if a number is odd or even (Submittable assignment)
function EvenOrOdd(num){
    if(Number.isInteger(num/2)){        //we can use (i%2==0) in place of (Number.isInteger(i/2)).
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
}
EvenOrOdd(125);
EvenOrOdd(24);
EvenOrOdd(36);
EvenOrOdd(45);
