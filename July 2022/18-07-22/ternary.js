//Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator.
let marks = 46;
let result = (marks >= 40) ? "pass" : "fail";
console.log(`you ${result} the exam.`);


//using function
function pass_fail(n){
    let marks = n;
    let result =(marks >= 40) ? 'Pass' : 'Fail';
    console.log(`You ${result} the exam.`); 
}
pass_fail(30);
