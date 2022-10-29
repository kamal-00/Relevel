for(i=1;i<5;i++){      //To print two digit number < 50, the number(i) at tens place should be <5.
    var r = i;      //reserve the value of "i" i.e. 1 in first step in var r. 
    for(j=9;j>0;j--){   //for i=1, run the loop j = 9 to 1.
        var s = j;      //and store the value of j in var s.
        if(r==s){       //when the value of r equals to s then we print our result.
            console.log(r*10+s); //the loop continues untill all the values of i is compared with all the values of j.
        } else{"no"}
    }
}