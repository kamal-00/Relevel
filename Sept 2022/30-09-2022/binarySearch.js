/*const linearSearch = (value, array) =>{
    for(let i=0; i<array.length; i++){
        console.log(i+1);
        if(value === array[i]){
            return i;
        }
    }
    return -1;
}
const values = [0,1,2,3,4,5,6,7,8,9,10];*/

//console.log(linearSearch(7,values)); //7th index place where we find 7. No of iteration is 8. 
//console.log(linearSearch(15,values)); // -1 as the element is not present in the array.


const binary = (value, array) =>{
    let lower = 0;
    let upper = array.length-1;

    while(lower<=upper){
        console.log("try")
        const middle = Math.floor((lower+upper)/2);

        if(value === array[middle]){
            return middle;
        }

        if(value<array[middle]){
            upper = middle-1;
        } else{
            lower = middle+1;
        }
    }
    return -1;
}
const value = [0,1,2,3,4,5,6,7,8,9,10];
console.log(binary(7,value));