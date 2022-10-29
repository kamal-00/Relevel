//Definition and Usage
//The slice() method returns selected elements in an array, as a new array.
//The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.slice(1, 3);
console.log(fruits);

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruit.slice(1, 3)); //here 1 is index and 3 is length 


const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruitss.slice(1, 3);
console.log(citrus);

//Select elements using negative values:
const fru = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fru.slice(-3, -1);
console.log(myBest);