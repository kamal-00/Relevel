//Given 2 sorted arrays. Your task is to find the median of both arrays

function median(arr1,arr2){
    let arr3 = [];
    let i,j,k;
    i=j=k=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            arr3[k] = arr1[i];
            i++;
        } else{
            arr3[k] = arr2[j];
            j++;
        }
        k++;
    }
    while(i<arr1.length){
        arr3[k] = arr1[i];
        k++; i++;
    }
    while(j<arr2.length){
        arr3[k] = arr2[j];
        k++; j++;
    }
    let mid = parseInt(arr3.length/2);
    let mediann = (arr3[mid-1]+arr3[mid])/2;
    console.log(mediann);
    return arr3;
}
//Input -
let arr1 = [11, 12, 25, 26, 38];
let arr2 = [2, 23, 17, 20, 45];
console.log(median(arr1,arr2));
