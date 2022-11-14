module.exports.verifyPromise=()=>{
    //crete a promise which will encapsulate async code.
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                console.log("verified");
                reject("Error");
            }catch(ex){
                reject("Couldn't verify");
            }
        },1000);
    })
    return promise;
}