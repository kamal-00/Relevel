/*Definition and Usage
The join() method returns an array as a string.
The join() method does not change the original array.
Any separator can be specified. The default is comma (,).*/

//What will happen if reverse() and join() methods are used simultaneously? (Easy)
const arr1=[1,2,3,4];
//console.log(arr1.join()); //1,2,3,4
//const arr2=[" 5 "];
//let rev=arr1.reverse(); // [4,3,2,1]; 
//console.log(rev);
let result=arr1.reverse().join();
console.log(result);


//console.log(arr1.join(arr2));// 4535251

//const arr3=[5,6];
//console.log(arr3.join(arr1));// 54,3,2,16

/*const fruit = ["Banana", "Orange", "Apple", "Mango"];
let text = fruit.join();
console.log(text);*/

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
let texts = fruits.join(" and ");
console.log(texts);*/