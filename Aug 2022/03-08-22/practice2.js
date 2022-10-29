//Problem – Given an array denoting the cost of stock on different days. Your task is to find the
//maximum profit which can be earned after buying or selling the stock on that particular day. For
//example –
//Input – [100,180,260,310,40,535,695]
//Output – 865 (Buy stock on Day 0 and sell it on Day 3 and again buy on Day 4 and sell on Day 6)
//Naive Approach – We can iterate through the array and buy and sell stock everyday to check if
//we are getting maximum profit or not. If we get more profit, we can update our maximum profit so
//far.
//We can use nested loop in this case to get the desired value

function maxprofit(array){
    let maxprofit = 0;
    let tmaxprofit = 0;
    let buyingprice = array[0];
    for(i=0; i<array.length; i++){
        sellingprice = array[i+1];
        if(sellingprice<buyingprice){
            buyingprice = sellingprice;   
            tmaxprofit = tmaxprofit+maxprofit; //doubt.
        }
        if(sellingprice>buyingprice){
            profit = sellingprice - buyingprice;
            if(profit>maxprofit){
                maxprofit = profit;  
            }
        }
    }
    console.log(maxprofit);
    console.log(tmaxprofit+maxprofit);
}
let array = [100,180,260,310,40,535,695,20];
//let array = [100, 180, 260, 310, 695, 535, 40];
maxprofit(array);