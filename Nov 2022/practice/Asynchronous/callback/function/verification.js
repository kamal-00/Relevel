//cb is callback function
module.exports.verify=(upi, cb)=>{
    setTimeout(()=>{
        console.log("verified")
        cb();
    },1000);
}