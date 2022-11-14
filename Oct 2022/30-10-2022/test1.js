/*"Problem Statement1:
Chef has a number D containing only digits 0's and 1's. He wants to make the number to have all the digits same. For that, he will change exactly one digit, i.e. from 0 to 1 or from 1 to 0. If it is possible to make all digits equal (either all 0's or all 1's) by flipping exactly 1 digit then output ""Yes"", else print ""No"" (quotes for clarity)
Input
The first line will contain an integer T representing the number of test cases.
Each test case contain a number made of only digits 1's and 0's on newline
Output
Print T lines with a ""Yes"" or a ""No"", depending on whether its possible to make it all 0s or 1s or not. 
Constraints
Subtask #1: (40 points)
1 ≤ T ≤ 50
1 ≤ Length of the number D ≤ 50

Subtask #2: (60 points)
1 ≤ T ≤ 10
1 ≤ Length of the number D ≤ 105
 
Sample Input 1 
2
101
11
Sample Output 1 
Yes
No
Explanation
Example case 1. In 101, the 0 can be flipped to make it all 1..
Example case 2. No matter whichever digit you flip, you will not get the desired string.
"
*/
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
    return  result; 
}
function main() {
	    let t = parseInt(readline());
        while(t--)
    {
      let s = readline();
          
        }
}