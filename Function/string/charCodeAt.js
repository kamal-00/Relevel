/*Definition and Usage
The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
The index of the first character is 0, the second is 1, ....
The index of the last character is string length - 1 (See Examples below).
See also the charAt() method.*/

let text = "HELLO WORLD";
//let code = text.charCodeAt(0); //72
//let code = text.charCodeAt(1); //69
//let code = text.charCodeAt(text.length-1); //68
let code = text.charCodeAt(15); //NaN
console.log(code);