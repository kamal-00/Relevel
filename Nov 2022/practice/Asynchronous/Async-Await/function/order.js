
const upiVerification= require("./verification")

function placeOrder(){
    console.log("Order Placed");
}

async function validatePaymentSystem(){
    const result = await upiVerification.verifyPromise("xyz@okicici");
    console.log(result);
    deductMoney();
}

function deductMoney(){
    console.log("Money Deducted");
}

placeOrder();
validatePaymentSystem();

//Order Placed
//verified
//Verified      
//Money Deducted