//To find how much more lecture is needed to achieve 75% of total lecture if m and n both are given.
function minilac75(m,n){    //m = total lecture ; n = number of lecture attended.
    if(n/m>=.75){           //if (n/m*100)% = 75%. 
        console.log(" Minimum Lecture is achieved");
    } else{
        console.log((.75-(n/m))*m); // [75% - (n/m*100)%]m
    }
}
minilac75(160,120);
minilac75(160,110);
minilac75(160,130);
minilac75(7,6);

//How much minimumu lacture is needed to achieve 75% of total lecture?
function minilacfor75(x){
    var y = .75*x;
    console.log(y);
}
minilacfor75(200);
minilacfor75(100);
minilacfor75(40);
minilacfor75(80);