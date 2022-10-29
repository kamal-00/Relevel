//const students = ["Zakvan", "Anashvar", "Rahul", "Asif", "Jagruthi"];
//console.log(students.map((str) => str.length)); // [6,8,5,4,8]

//const students = ["Zakvan", "Anashvar", "Rahul", "Asif", "Jagruthi"];
//console.log(students.filter((str) => str.length<=5));  // Rahul, Asif

//const students = ["Zakvan", "Anashvar", "Rahul", "Asif", "Jagruthi"];
//console.log(students.map((str) => str.length<=5));  // false, false, true, true, false

//const nums = [19, 45, 78, 23, 12, 90, 32, 87, 63];
//console.log(nums.filter((num)=>num%2==0));

/*const students = [
    {"name":"Shivam", age: 30},
    {"name":"Saurabh", age: 25},
    {"name":"Student3", age: 17},
    {"name":"Student4", age: 22},
    {"name":"Student5", age: 10},
    {"name":"Student6", age: 12}
]
// output
//    [ {"name":"Shivam", age: 30},
//    {"name":"Saurabh", age: 25},
//    {"name":"Student4", age: 22}]
console.log(students.filter((obj) => obj.age>18));*/

const nums = [2, 4, 7, 9];
//average of the array nums
console.log(nums.reduce((previousnum,currentnum) => previousnum+currentnum)/nums.length);
