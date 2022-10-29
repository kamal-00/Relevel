/*Q2. Problem Statement 2 Given an array of size n, find the count of the odd numbers in an array. Odd numbers are numbers which are not divisible by 2, eg. 1, 3, 5, 17, 55 Hint - we use % operator for finding the remainder Constraint • 1 <= N <= 105 • Array A can contain duplicates • All input values are integers Input Format • First-line contains N. • Second line contains N space-separated integers denoting the array A. Output Format • Print the index Sample Input 1 6 22 7 111 3 5 1 Sample Output 1 5 Explanation of Sample 1 In the array, 7, 111, 3, 5, 1 are odd numbers Sample Input 2 7 5 7 4 8 6 -5 -8 Sample Output 2 3 Explanation of Sample 2 In the input array, 5, 7, -5 are odd numbers Sample Input 3 7 8 12 76 42 8 90 24 Sample Output 3 0 Explanation of Sample 3 In the input array, no odd numbers are present
*/
let testcase = parseInt(readline());
 while(testcase>0){
 let n = parseInt(readline());
 let  arr =[];
  arr = readline().split(" ").map(Number);
console.log(countOddNumbers(arr, n));
testcase--;
 }
function countOddNumbers(arr, n){
 var count = 0;
    for(let i = 0; i < n; i++){
        if(arr[i] % 2 != 0){
            count++;;
        }
    }
    return count;
}