function revNum(num){
    let strNum = num.toString();
    let revStr = "";
    for(let i=strNum.length; i>=0; i--){
        revStr.push(strNum[i]);
    }
    let result = Number(revStr.join(""));
}
revNum(1234);