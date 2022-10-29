function printResult(grade) {
    switch (grade) {
        case "A+" : {
            console.log("Distinction");
        }
        case "A" : {
            console.log("first");
        }
        case "B" :{
            console.log("second");
        }
        case "C" :{
            console.log("fail");
        }
    }
}
printResult("B");
