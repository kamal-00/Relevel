/*Given a positive number you need to write a program in javascript to find the sum of the inner digits of
that number.
Input 2124 Output 3*/

function SumOfInnerNum(N){
    var strN = N.toString();
    let output = 0;
    for(i=1;i<=strN.length-2;i++){
        output = output + Number(strN[i]);
    }   
    console.log(output);
}
SumOfInnerNum(1234);
SumOfInnerNum(5468);

// Approach.
// Input => 1234567 => 2+3+4+5+6 => 20 
// Step 1: convert into a string.
// Step 2: Traverse and pick individual digits.


/*function getSumOfInnerDigits(num){ // 123456
    var numStr = num.toString() // converting num to string.
    // 1. Check if inner digits are present.
    if(numStr.length<3){
        console.log(-1);
        return;
    }
    // 2. Run Loop.
    let sum=0;
    for(let i=1; i<=numStr.length-2; i++){
        sum+=Number(numStr[i]);
    }
    console.log(sum);
}

getSumOfInnerDigits(123456); // 14
getSumOfInnerDigits(12);  // -1
getSumOfInnerDigits(9);  // -1
getSumOfInnerDigits(7071); // 7
getSumOfInnerDigits(123); // 2*/