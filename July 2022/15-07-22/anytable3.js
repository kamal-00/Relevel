//To find the table of a number under given value.
function table(m,n){
    for(n=1;n<=100;n++){
        if(n%m!=0){
            continue;
        }
        console.log(n);
    }
}
table(5,100);