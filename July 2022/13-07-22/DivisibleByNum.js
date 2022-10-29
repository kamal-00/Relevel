/*"Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)Z
R Print Relevel if divisible by 3Z
R Print Buzz if divisible by 5Z
R Print MindBuzz if divisible by 15Z
R Print tSe number if all tSe above condition fails"*/

for(i=1;i<=100;i++){
    var r = i;
    if(Number.isInteger(i/3)){
        console.log("Relevel");
    } else if(Number.isInteger(i/5)){
        console.log("Buzz");
    } else if(Number.isInteger(i/15)){
        console.log("MindBuzz");
    } else {
        console.log("tSe number");
    }
}