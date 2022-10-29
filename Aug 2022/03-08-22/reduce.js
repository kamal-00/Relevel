var input = [1, 2, 3];
var sum = input.reduce((acc, curr) => acc + curr, 5);
console.log(sum); // console: 11
//Note: Here, we are passing the optional initialValue parameter to the reduce() function, saying that we want to
//start with 5 and do whatever we want inside the callback.