//cb is callback function
module.exports.verify=(upi, cb)=>{
    setTimeout(()=>{
        try{
            throw new Error("Error while verification");
            console.log("verified")
            cb();
        } catch(ex){
            cb(ex);
        }
        
    },1000);
}