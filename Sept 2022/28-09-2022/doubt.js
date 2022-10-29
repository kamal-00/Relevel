/*X-MAS ARRAY
Problem Statement
An array is called “X-Mas”, if no two adjacent elements have sum strictly greater than X.
You are given an array A of N integers. In one operation you can select a K (1<=K<=N)
such that AK > 0 and decrease AK by 1.
For the given value of X, find the minimum number of operations required to make A, a X-Mas array.
You are given T independent test cases.
Constraints
1 <= T <= 10
1 <= N <= 105
1 <= Ai <= 109
0 <= X <= 109
All input values are integers.
Input Format
First-line contains T.
First line of each test case consists of two space separated integers N and X.
Second line contains N space separated integers denoting the array A.
Output Format
Print in a newline for each test case a single integer denoting the minimum number
of operations required to make array A, a X-Mas array.
Sample Input 1
1
3 3
2 2 2
Sample Output 1
1
Explanation of Sample 1
Decrease the 2nd element by 1. So, Array A = [2,1,2].*/

let numberOfTestCases = parseInt(readline())

while(numberOfTestCases--){
	let [n, x] = readline().split(' ').map(Number)
	let array = readline().split(' ').map(Number)

	let numOperations = 0
	// 2 1 2 
	// sum = 4
	// X = 3 
	// change = 1
	for (let index = 0; index < n; index++){
		var adjSum = array[index] + array[index + 1]
		if (adjSum > x){
			numOperations += adjSum - x 
			array[index + 1] -= numOperations
		}
		console.log(array)
	}
	console.log(numOperations)
	
}