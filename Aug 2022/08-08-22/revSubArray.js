function revSubArray(array){
    if(array.length==1){
        return true;
    }
    for(let i=0;i<=array.length-1;i++){
        if(array[i]>array[i+1]){
            startIndex = i;
            break;
        }
    }
    for(let j=startIndex;j<=array.length-1;j++){
        if(array[j]<array[j+1] || j==array.length-1){
            endIndex = j;
            break;
        }
    }
    let revsubarray = [];
    let l=0;
    for(let k =endIndex;k>=startIndex;k--){
        revsubarray[l]=array[k];
        l++;
    }
    for(i=0;i<=revsubarray.length-1;i++){
        array[startIndex]=revsubarray[i];
        startIndex++;
    }
    console.log(array);
    for(let i=0;i<=array.length-1;i++){
        if(array[i]>array[i+1]){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
revSubArray([1,2,3,6,5,4]);