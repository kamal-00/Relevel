
const upiVerification= require("./verification")

function placeOrder(){
    console.log("Order Placed");
}

function validatePaymentSystem(){
    const promise = upiVerification.verifyPromise("xyz@okicici");
    promise.then(
        //(will be called by js internally)when promise is fullfilled.
        (msg)=>{
            console.log(msg);
            deductMoney();
        },
        //when promise is rejected.
        (err)=>{
            console.log(err);
        }
    )
}

function deductMoney(){
    console.log("Money Deducted");
}

placeOrder();
validatePaymentSystem();

//Order Placed
//Couldn't verify

/*If we remove or commentout err the result will be:-
Order Placed
verified
Verified      
Money Deducted*/