/*Definition and Usage
The charAt() method returns the character at a specified index (position) in a string.
The index of the first character is 0, the second 1, ...*/ 

let text = "HELLO WORLD";
//let letter = text.charAt(0); //H
//let letter = text.charAt(6); //W
//let letter = text.charAt(15); //No result
//let letter = text.charAt(); //H
//let letter = text.charAt(text.length-1); //D
//let letter = text.charAt(1); //E
let letter = text.charAt(3,14); //L
console.log(letter);