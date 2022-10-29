/*Given an integer array nums, print all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j !=k, and nums[i] + nums[j] + nums[k] == 0.
Example :
Input : [1,-1,2,0,3,1,-2]
Output :
[-2,-1,3]
[-2,0,2]
[-2,1,1]
[-1,0,1]*/

function findTriplets(arr) {
    let found = false;
    for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] === 0)
            {
            console.log([arr[i], arr[j],arr[k]])
                found = true;
                
            }
        }
    }

    if(found === false) {
        console.log(" not exist ");
    }
}
}
let arr = [1,-1,2,0,3,1,-2];
findTriplets(arr);