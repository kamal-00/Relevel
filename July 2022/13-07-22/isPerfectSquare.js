function isPerfectSquare(n){
    for(let i=1;i<=n;i++){
        if(i*i==n){
            return true;
        }
    }
    return false;
}
console.log(isPerfectSquare(12));