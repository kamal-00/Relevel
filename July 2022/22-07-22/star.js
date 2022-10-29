function printstar(n){
    let star = "";
    for(i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            star+= " ";
        }
        for(k=1;k<=i*2-1;k++){
            star+="*";
        }
        star+="\n";
    }
    console.log(star);
}
printstar(5);
