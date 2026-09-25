class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let max = 0, left = 0;
    for (let right = 0; right < prices.length; right++) {
        if (prices[right] <= prices[left]) left = right;
        else {
            if (max === null || max < prices[right] - prices[left]) max = prices[right] - prices[left];
        }
    }
    return max;
}
}
