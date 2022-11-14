//cb is callback function
module.exports.verify=(upi, cb)=>{
    setTimeout(()=>{
        throw new Error("Error while verification");
        console.log("verified")
        cb();
    },1000);
}