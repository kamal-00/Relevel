let num = 0;
switch (true) {    
    case (num>0):
        text = "The Number is Positive";
        break;
    case (num<0):
        text = "The Number is Negative."
        break;
    case (num===0):
        text = "The Number is Zero";
        break;
    default:
        text = "No Value Found";    
}
console.log(text);