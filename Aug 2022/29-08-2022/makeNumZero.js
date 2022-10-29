var steps=0;
function makeItZero(num){
    if(num==0){
        console.log(steps);
        return;
    }
    steps++;
    let array = num.toString().split('').map(i=>Number(i));
    let max = Math.max(...array);
    makeItZero(num-max);
}
makeItZero(27);