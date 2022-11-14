
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
            console.log("This is inside then")
            console.log(err);
        }
    ).catch(
        (err)=>{
            console.log("This is inside catch")
            console.log(err);
    })
}

function deductMoney(){
    console.log("Money Deducted");
}

placeOrder();
validatePaymentSystem();

//Order Placed
//This is inside then
//Couldn't verify
//error in then is higher priority.