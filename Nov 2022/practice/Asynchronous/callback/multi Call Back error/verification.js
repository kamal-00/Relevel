//cb is callback function
module.exports.verify=(upi, cb)=>{
    setTimeout(()=>{
        console.log("verified")
        cb();
        cb();
        cb();
    },1000);
}