/*Definition and Usage
The fill() method fills specified elements in an array with a value.

The fill() method overwrites the original array.

Start and end position can be specified. If not, all elements will be filled.*/



const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");
console.log(fruits);

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.fill("Kiwi", 2);
console.log(fruit);

const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.fill("Kiwi", 2, 3);
console.log(fru);

const fr = ["Banana", "Orange", "Apple", "Mango"];
fr.fill("Kiwi", 2, 3);
console.log(fr);

const f = ["Banana", "Orange", "Apple", "Mango"];
f.fill(0);
console.log(f);

var b = Array(5);
console.log(b); //[ <5 empty items> ]

b.fill(0);
console.log(b); //[ 0, 0, 0, 0, 0 ]

b[4]++;
console.log(b); //[ 0, 0, 0, 0, 1 ]


