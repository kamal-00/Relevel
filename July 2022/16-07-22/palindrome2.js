function palindrome(num){
    for(let i=10000; i<=num;i++){
        stri = i.toString();
        let revstri="";
        for(let j=stri.length-1;j>=0;j--){
            revstri+=stri[j];
        }
        if(stri==revstri){
            console.log(Number(stri));
        }
    }
}
palindrome(11000);