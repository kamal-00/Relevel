findMaxProfit([78,21,67,68,23,190,43,21,23]);
const array = [78,21,67,68,23,190,43,21,23];
function findMaxProfit(array){
    changebuyingprice = true;
    for(let i=0;i<array.length;i++){
        sellingprice = array[i+1];
        if(changebuyingprice){
            buyingprice= array[i];
        }
        if(sellingprive<buyingprice){
            changebuyingprice = true;
        } else {
            profit = sellingprice - buyingprice;
            
        }

    }
}
