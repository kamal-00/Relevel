function reverseStr(str){
    let output = "";
    for(i=str.length-1;i>=0;i--){
        output = output + str[i];
    }
    console.log(output);
}
reverseStr("Patna");
reverseStr("I am a boy");
reverseStr("str.Ball");