function PrintStar(n) {
let string = "";
 
for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    string += " ";
  }
  for (let j = 0; j < i * 2 - 1; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
}
PrintStar(5);
