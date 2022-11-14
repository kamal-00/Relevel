
const upiVerification= require("./verification")

function placeOrder(){
    console.log("Order Placed");
}

function validatePaymentSystem(){
    const promise = upiVerification.verifyPromise("xyz@okicici");
    promise.then(
        //(will be called by js internally)when promise is fullfilled.
        ()=>{
            deductMoney();
        },
        //when promise is rejected.
        ()=>{}
    )
}

function deductMoney(){
    console.log("Money Deducted");
}

placeOrder();
validatePaymentSystem();

/*Order Placed
verified
Money Deducted*/