//Given an array of integers, find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.*/
/*Input: arr[] = {1, 9, 3, 10, 4, 20, 2}
Output: 4
Explanation: The subsequence 1, 3, 4, 2 is the longest subsequence of consecutive elements

Input: arr[] = {36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42}
Output: 5
Explanation: The subsequence 36, 35, 33, 34, 32 is the longest subsequence of consecutive elements.*/

// JavaScript program to find longest
        // contiguous subsequence
 
        // Returns length of the longest
        // contiguous subsequence
        function findLongestConseqSubseq(arr, n) {
            let ans = 0, count = 0;
 
            // sort the array
            arr.sort(function (a, b) { return a - b; })
 
            var v = [];
            v.push(arr[0]);
 
            //insert repeated elements only once in the vector
            for (let i = 1; i < n; i++) {
                if (arr[i] != arr[i - 1])
                    v.push(arr[i]);
            }
            // find the maximum length
            // by traversing the array
            for (let i = 0; i < v.length; i++) {
 
                // Check if the current element is equal
                // to previous element +1
                if (i > 0 && v[i] == v[i - 1] + 1)
                    count++;
                // reset the count
                else
                    count = 1;
 
                // update the maximum
                ans = Math.max(ans, count);
            }
            return ans;
        }
 
        // Driver code
 
        let arr = [1, 2, 2, 3];
        let n = arr.length;
        document.write(
        "Length of the Longest contiguous subsequence is "
        +findLongestConseqSubseq(arr, n)
        );

/*Output
Length of the Longest contiguous subsequence is 3
Time complexity: O(Nlog(N)), Time to sort the array is O(Nlog(N)).
Auxiliary space: O(N). Extra space is needed for storing distinct elements.*/