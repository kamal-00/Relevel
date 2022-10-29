//setTimeout() - Function to delay result timing.
//It takes two parameters one is time handler means for whom we need to delay the timing and
// second timeout means for how much time we have to delay the timing.

//async means running parallel threads. Means result doesn't depend on previous one.

console.log("Start of Program");

var x = 20;
var y = 10;

// executes a task after given time.
setTimeout(()=>{
    console.log(x+y);
},0);

console.log("End of Program");