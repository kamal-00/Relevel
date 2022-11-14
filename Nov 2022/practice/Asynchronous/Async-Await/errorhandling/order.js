
const upiVerification= require("./verification")

function placeOrder(){
    console.log("Order Placed");
}

async function validatePaymentSystem(){
    try{
        const result = await upiVerification.verifyPromise("xyz@okicici");
        console.log(result);
        deductMoney();
    } catch(ex){
        console.log(ex);
    }
}

function deductMoney(){
    console.log("Money Deducted");
}

placeOrder();
validatePaymentSystem();

/*Order Placed
verified
node:internal/process/promises:279
            triggerUncaughtException(err, true /* fromPromise
            [UnhandledPromiseRejection: */

//After using try catch, we find the error. And result below.            
//Order Placed
//verified
//Error            