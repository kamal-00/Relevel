/*function starprint(n){
    for(i=1;i<=n;i++){
        r =i*"*"
    }
    console.log(r);
}*/

function pattern(num) {
     for (let i = 1; i <= num; i++) {
         let pat = ""; 
         for (let j = 1; j <= i; j++) {
             pat += "*"; 
            }
            console.log(pat); 
    } 
} 
pattern(5);