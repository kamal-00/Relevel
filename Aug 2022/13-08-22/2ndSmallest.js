function findSecondSmallestNum(array){
    let smallest = Number.MAX_VALUE;
    let secondsmallest = Number.MAX_VALUE;

    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
           // secondsmallest=smallest;
            smallest=array[i];
        }
        if(array[i]>smallest && array[i]<secondsmallest){
            secondsmallest = array[i];
        }
    }
    console.log("second smallest is: "+secondsmallest);

    
}
findSecondSmallestNum([11,34,54,22,13,78])
//console.lo