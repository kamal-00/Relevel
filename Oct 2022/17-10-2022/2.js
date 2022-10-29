function revarray(arr){
    //method 1
//arr.reverse();
//console.log(arr);

//method 2
let result=[];
for(let i=arr.length-1; i>=0; i--){
result.push(arr[i]);
}
console.log(result);
}
let array=[1,2,3,4];
revarray(array);