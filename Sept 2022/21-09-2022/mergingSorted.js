function voidMerge(a,b){
    let c = [];
    let i,j,k;
    i=j=k=0;
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            c[k] = a[i];
            i++; k++;
        } else{
            c[k] = b[j];
            j++; k++;
        }
    }
    while(i<a.length){ //copying remaining elements in a to c.
        c[k] = a[i];
        i++; k++;
    }
    while(j<b.length){ //copying remaining elements in b to c.
        c[k] = b[j];
        j++; k++;
    }
    return c;
}

let a = [2,10,18,20,23];
let b = [4,9,19,25];
console.log(voidMerge(a,b));