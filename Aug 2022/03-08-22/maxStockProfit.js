function maxprofit(array){
    let buyingPrice = array[0];
    let maxProfit = 0;
    for(let i=1;i<array.length;i++){
        sellingPrice = array[i];
        if(buyingPrice>sellingPrice){
            buyingPrice = array[i];
        } else{
            profit = sellingPrice-buyingPrice;
            if(profit>maxProfit){
                maxProfit=profit;
            }
        }
    }
    console.log(maxProfit);
}
maxprofit([100,180,260,310,40,535,695]);
//maxprofit([100, 180, 260, 310, 695, 100, 535, 40]);
