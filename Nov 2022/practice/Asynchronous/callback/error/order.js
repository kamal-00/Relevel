
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
/*E:\Relevel\Nov 2022\practice\Asynchronous\callback\error\verification.js:4
throw new Error("Error while verification");
^

Error: Error while verification*/