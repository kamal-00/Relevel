/*Create a program which gives output for children to go out in park if the temperature is between 20
degrees Celsius – 25 degrees Celsius and if it’s not raining outside, ask them to be in play school if
the temperature is between 18 degrees Celsius to 20 degrees Celsius and raining otherwise, they
should not step out of the home.*/
/*let temp = 22;
let isRaining = true;
if((temp>=20 && temp<=25) && isRaining == false){
    console.log(`You can go out in tne Park.`);
    } else if((temp>=18 && temp<=20) && isRaining == false){
        console.log(`You can stay in Play School`);
    } else {
        console.log(`Go Home and Stay There.`);
    }
//result- Go Home and Stay There ?*/

function plan(temp,israining){
    if((temp>=20 && temp<=25) && israining == false){   // !israining
        console.log("Go out in Park");
    } else if ((temp>=18 && temp<=20) && israining == true){
        console.log("Be in play school");
    } else{
        console.log("Stay at Home");
    }
}
plan(24,false);
plan(20,true);
plan(17,false);