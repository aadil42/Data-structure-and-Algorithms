/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
    
    let left = 0;
    let right = 1;
    let max = 0;

    while(right < prices.length) {

        const profit = prices[right] - prices[left];

        if(profit > max) {
            max = profit;
        }
        // if we find the value that is lower than the previous then we buy at that time. meaning we increment the left pointer
        if(profit < 0) {
            left = right;
        }
        right++;
    }

    return max;
};