function grade(num){
    if(num>=90){
        console.log("Grade A")
    } else if(num>=80 && num<90){
        console.log("Grade is B");
    } else if(num>=60 && num<80){
        console.log("Grade is C");
    } else if(num>=33 && num<60){
        console.log("Grade is D");
    } else{
        console.log("Fail")
    }
}
grade(95);
grade(64);
grade(25);
grade(85);
grade(42);
