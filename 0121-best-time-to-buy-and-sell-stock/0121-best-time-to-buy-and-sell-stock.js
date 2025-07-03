/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let maxProfit = 0;
    for(i = 1; i < prices.length; i++ ){
        if(prices[i]-buyPrice > maxProfit){
            maxProfit = prices[i]-buyPrice;
        }
        if(buyPrice > prices[i]){
            buyPrice = prices[i]
        }
    }
    return maxProfit;
};