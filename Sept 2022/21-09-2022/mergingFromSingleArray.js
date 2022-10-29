function voidMerge(a,lo,mid,hi){
    let c = [];
    let i,j,k;
    i=0; j=mid+1; k=0;
    while(i<=mid && j<=hi){
        if(a[i]<a[j]){
            c[k] = a[i];
            i++; k++;
        } else{
            c[k] = a[j];
            j++; k++;
        }
    }
    while(i<=mid){ //copying remaining elements in a to c.
        c[k] = a[i];
        i++; k++;
    }
    while(j<=hi){ //copying remaining elements in b to c.
        c[k] = a[j];
        j++; k++;
    }
    for(let i=lo; i<=hi; i++){
        a[i] = c[i];
    }
    return a;
}
let a = [7,15,2,8,10];
console.log(voidMerge(a,0,1,4));