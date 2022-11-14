
const upiVerification= require("./verification")

function placeOrder(){
    console.log("Order Placed");
}

function validatePaymentSystem(){
    upiVerification.verify("xyz@okicici",deductMoney);
}

function deductMoney(){
    console.log("Money Deducted");
}

placeOrder();
validatePaymentSystem();

//Result:-
//Order Placed
//verified
//Money Deducted