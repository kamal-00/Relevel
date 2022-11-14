function inc(arr){
    let a=1;
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]===9){
            arr[i]=0
        }else{
            arr[i]+=1;
            return arr;
        }
    }
    return [1].concat(arr)
}

console.log(inc([9,9,3]))