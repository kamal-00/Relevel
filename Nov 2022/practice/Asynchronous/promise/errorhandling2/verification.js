module.exports.verifyPromise=()=>{
    //crete a promise which will encapsulate async code.
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                throw new Error("Error in promise");
                console.log("verified");
                resolve("Verified");
            } catch{
                reject("Couldn't verify");
            }
            
        },1000);
    })
    return promise;
}