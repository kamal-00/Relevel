
const upiVerification= require("./verification")

function placeOrder(){
    console.log("Order Placed");
}

function validatePaymentSystem(){
    upiVerification.verify("xyz@okicici");
}

function deductMoney(){
    console.log("Money Deducted");
}

placeOrder();
validatePaymentSystem();
deductMoney();

//Result:-
//Order Placed
//Money Deducted
//verified
//Here it shows asynchronous program as money deducted before verification.