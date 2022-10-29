function findPrimeNumbers(n){
    for(i=2;i<=n;i++){
        let isPrime = true;
        for(let j=2;j<=i-1;j++){
            if(i%j==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}
findPrimeNumbers(10);
//findPrimeNumbers(100);