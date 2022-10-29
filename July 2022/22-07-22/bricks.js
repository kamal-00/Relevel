/*Bob has recently started his career as a builder. But he is always confused about the number of
bricks that will be needed at the site. To be on safer side he always orders more than the required
number of bricks. This inturn helps him in saving the transportation cost of bricks but adds an
unnecessary burden on the pockets of the client. Due to which most of the clients never call Bob
back for any new project.
Bob needs your help in deciding how many bricks are needed for constructing a wall of length L
meter, height H meter and thickness T meter if 15% of the wall is filled with mortar and the
dimension of 1 brick is 24x12x8 cm.
BED-Class #180DaysofPurpose
Input L=24, H = 8, T = 0.6
Output 42500*/
function calculateBricks(){

    let lOfWall = 24;
    let hOfWall = 8;
    let thickness = 0.6;
    let volumeOfWall = lOfWall*hOfWall*thickness;
    let volumneOfBrick = 24*12*8;
    let mortar = 15;

    let noOfBricks = (((100-mortar)/100) * volumeOfWall * (100*100*100) / volumneOfBrick);
    console.log(Math.ceil(noOfBricks));
    
}

calculateBricks();
console.log(Math.round(10.2));
console.log(Math.ceil(10.9));

/*function numofbrick(l,h,t){
    var n = (.85*l*h*t*100*100*100)/(24*12*8);
    console.log(Math.ceil(n));   //Math.ceil round up number to the next greater number.
}
numofbrick(24,8,0.6);*/