function mirrorPyramid(num){
    //reverse Pyramid
    for(let i =1;i<=num;i++){
        let line="";
        for(j=1;j<i;j++){
            line+=" ";
        }
        for(k=i;k<=num;k++){
            line+=k+" ";
        }
        console.log(line);
    }
    //adding Pyramid
    for(let i=1;i<num;i++){
        let line="";
        for(let j=1;j<num-i;j++){
            line+=" ";
        }
        for(let k=num-i;k<=num;k++){
            line+=k+" ";
        }
        console.log(line);
    }
}
mirrorPyramid(7);
//mirrorPyramid(9);