/*"Problem Statement2:
 
Abhi gave integers a, b and n to Raj. Raj wants to compare a^n and b^n. Help Raj with this task.
 
Input
The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
The first and only line of each test case contains three space-separated integers a, b and n.
 
Output
For each test case, print a single line containing one integer: 1 if a^n > b^n 
2 if a^n < b^n or 0 if a^n = b^n.
 
Constraints
1 ≤ T ≤ 1,000
|a|,|b| ≤ 109
1 ≤ n ≤ 109
 
 
Sample Input 1 
    
    2
    3 4 5
   -3 2 4
   Sample Output 1 
    2
    1
"*/

process.stdin.resume(); // A Readable Stream that points to a standard input stream (stdin)
process.stdin.setEncoding('utf-8'); // so that the input doesn't transform

let inputString1 = "";
let inputString = "";
let currentLine = 0;

process.stdin.on('data', function (userInput) {
    inputString1 = inputString1 + userInput; // taking the input string
});

process.stdin.on('end', function(x) {
    inputString1.trim();
    inputString1 = inputString1.split("\n"); // end line
    for(let i = 0; i< inputString1.length ; i++ ) {
        inputString += inputString1[i].trim() + ' ';
    }
    inputString.trim();
    inputString = inputString.split(" ");
    main();
});

function readline() {
    let result = inputString[currentLine++];
    return  parseInt(result); 
}
function main() {
	    let t = readline();
        while(t--)
    {
    	let arr =[];
    	for(let i = 0;i<3;i++){
    		arr[i]=readline();
    	}
      let a = arr[0];
      let b = arr[1];
      let n = arr[2];
//write your logic here
    }
}