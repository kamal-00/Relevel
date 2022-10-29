function PalindromeToNum(n){
    for(let i=10;i<=n;i++){
        var num= i;
        var strnum = num.toString();
        var strlen = strnum.length;
        //console.log(strnum);
        //console.log(strlen);
        let revstr = "";
        for(j=strlen-1;j>=0;j--){
            revstr += strnum[j];
        }
        revnum = Number(revstr);
        if(num==revnum){
            console.log(num);
        }
    }
}
PalindromeToNum(200);



