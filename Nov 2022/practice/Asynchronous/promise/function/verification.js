module.exports.verifyPromise=()=>{
    //crete a promise which will encapsulate async code.
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("verified")
            //it doesn't matter how many times you have called the function, it only called once.Here money is deducted once.
            resolve();
            resolve();
            resolve();
        },1000);
    })
    return promise;
}