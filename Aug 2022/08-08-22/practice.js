function revpyramid(n){
    for(let i=1;i<=n;i++){
        let line ="";
        for(let j=1;j<i;j++){
            line+=" ";
        }
        for(let k=i;k<=n;k++){
            line+=k+" ";
        }
        console.log(line);
    }
}
revpyramid(9);