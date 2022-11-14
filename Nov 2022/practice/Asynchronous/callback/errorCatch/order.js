
const upiVerification= require("./verification")

function placeOrder(){
    console.log("Order Placed");
}

function validatePaymentSystem(){
    upiVerification.verify("xyz@okicici",deductMoney);
}

function deductMoney(err){
    if(err){
        console.log("Error message received");
        console.log(err);
    } else{
        console.log("Money Deducted");
    }    
}

placeOrder();
validatePaymentSystem();

/*Result:-
Order Placed
Error message received
Error: Error while verification*/