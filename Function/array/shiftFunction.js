//Definition and Usage
//The shift() method removes the first item of an array.
//The shift() method changes the original array.
//The shift() method returns the shifted element.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits); //[ 'Orange', 'Apple', 'Mango' ]

const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.shift()); //Banana
