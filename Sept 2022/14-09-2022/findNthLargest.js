function find3rdLargest(arr,r){
    let n = arr.length;
    for(let i=0; i<3; i++){
         let flag = false;
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = true;
            }
        }
        if(flag==false){
            break;
        }
    }
    console.log(arr[n-r]);
    return arr;
}
let arr = [5,4,3,2,1,6,2];
let r = 3;
console.log(find3rdLargest(arr,r));